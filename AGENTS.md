# Agent notes for Contour

Contour is a Hermes desktop theme shipped as a disk plugin. Read this before
installing or editing it.

## Files

- `plugin.js`: the whole desktop theme. Light and dark palettes, plus
  `CUSTOM_CSS`, which Hermes injects as one `<style>` tag while the theme is
  active.
- `contour-cli.yaml`: an optional terminal skin for the Hermes CLI and TUI. The
  desktop app does not need it.
- `README.md`: install steps for people.

## Install for a user

1. Place the folder so the file lives at
   `$HERMES_HOME/desktop-plugins/contour/plugin.js` (default
   `~/.hermes/desktop-plugins/contour/plugin.js`). Clone or copy it; do not
   symlink it, because Hermes refuses plugin folders that contain symlinks.
2. Hermes watches `desktop-plugins/` and loads the plugin within seconds. If it
   does not, ask the user to press ⌘K and run **Reload desktop plugins**.
3. Ask the user to choose **Contour** in **Settings → Appearance**. Registering
   a theme lists it; it does not select it, and theme choice is per profile.
4. Optional terminal colors: copy `contour-cli.yaml` to
   `$HERMES_HOME/skins/contour-cli.yaml` and set `display.skin: contour-cli` in
   `$HERMES_HOME/config.yaml`. Back up
   `config.yaml` first and change only that one line.

Confirm the install by asking the user for a screenshot. You cannot see the
running app, and a theme that parses can still fail to apply.

## Rules for editing `plugin.js`

The loader evaluates the file uncompiled from a blob URL.

- Keep it to one file. Relative imports never resolve.
- Only three specifiers load: `@hermes/plugin-sdk`, `react` and
  `react/jsx-runtime`.
- Never put the word `import` or `from` before a quoted string inside a comment
  or string. The loader's scanner treats it as a real import and fails the
  whole plugin.
- No JSX syntax.

## Rules for the theme

- **Keep the theme name `contour`, and never name a YAML skin `contour`.** A
  YAML skin with the same name as a plugin theme overrides it, and the user
  loses light mode and all of `CUSTOM_CSS`. The terminal skin is named
  `contour-cli` for this reason.
- **Use the `--contour-*` variables.** Every color in `CUSTOM_CSS` reads one.
  Only the light block (`:root:root:not(.dark)`) and the dark block
  (`:root:root.dark`) hold hex values, so a change to one mode never leaks into
  the other.
- **Check contrast.** Text needs 4.5:1 against every surface it sits on,
  including hover and selected rows. Borders and focus rings need 3:1. Record
  the measured ratio in a comment beside the token.
- **Expect selectors to break.** Many rules target Hermes's internal class
  names and `data-slot` attributes, such as
  `[class*="group/pane-header"][class*="app-region:drag"]`. Read the matching
  source under `~/.hermes/hermes-agent/apps/desktop/src/` before writing a new
  selector, and recheck old ones after a Hermes update.
- **Use the shared selectors.** `SB` matches both sidebars and `MAIN` matches
  the main chat zone. Both are built in JavaScript above `CUSTOM_CSS` and
  interpolated into it.

## Check a change before committing

Run this from the plugin folder. It swaps the SDK import for a stub, loads the
plugin in Node, and checks that the CSS braces balance and every `${...}`
interpolated:

```bash
cp plugin.js "$TMPDIR/p.mjs"
sed -i '' "s#^import { THEMES_AREA } from '@hermes/plugin-sdk'#const THEMES_AREA='themes'#" "$TMPDIR/p.mjs"
node --input-type=module -e "
const m = await import('$TMPDIR/p.mjs?' + Date.now())
let r; m.default.register({ register: c => (r = c) })
const css = r.data.customCSS
console.log(r.data.name, css.split('{').length === css.split('}').length, !css.includes('\${'))
"
```

Expected output: `contour true true`. Then ask the user for a screenshot of
the change in the app.
