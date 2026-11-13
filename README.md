# Contour

A theme for the Hermes desktop app. Dark mode is charcoal with white accents,
and light mode is paper with near-black accents. Contour also restyles the
sidebars, tabs and chat column into one outlined workspace.

Contour is a desktop plugin: one `plugin.js` file that registers a theme. It
appears in **Settings → Appearance** as **Contour**, and in
**Capabilities → Plugins** as **Contour theme**.

## What it changes

- Neutral grays everywhere, with no accent tint in fills or lines.
- Browser-style title bar tabs: the active tab is outlined and flares into a
  line that runs around the chat area.
- Both sidebars share one look: a segmented tab control, a filled search field,
  quiet sentence-case headings, and no bullet for idle sessions or bots.
- An 800px chat column, with the composer lined up to the text above it.
- Your messages sit on the right as bubbles, at most 70% of the column wide.

Every text color passes WCAG AA contrast (4.5:1) in both modes, and every
control keeps a visible focus ring.

## Requirements

Hermes desktop v0.23.1 or later. Contour has been tested on macOS only.

## Install

### Option 1: Install from Git (recommended)

1. Open **Capabilities → Plugins** in Hermes.
2. Choose **Install from Git** and enter the repository URL:
   `https://github.com/andylobban/hermes-contour-theme`
3. Review the plugin and confirm.
4. Open **Settings → Appearance** and choose **Contour**.

### Option 2: Copy the folder by hand

1. Put this folder at `~/.hermes/desktop-plugins/contour/`, so the file sits at
   `~/.hermes/desktop-plugins/contour/plugin.js`:

   ```bash
   git clone https://github.com/andylobban/hermes-contour-theme ~/.hermes/desktop-plugins/contour
   ```

2. Wait a few seconds. Hermes watches that folder and loads new plugins on its
   own. If Contour does not show up, press ⌘K and run
   **Reload desktop plugins**.
3. Open **Settings → Appearance** and choose **Contour**.

If you use `HERMES_HOME`, replace `~/.hermes` with that path.

### Optional: matching terminal colors

`contour-cli.yaml` is a Hermes skin that gives the CLI and TUI the same grays. It
only affects the terminal. The desktop app keeps using the plugin.

1. Copy it into your skins folder:

   ```bash
   mkdir -p ~/.hermes/skins
   cp ~/.hermes/desktop-plugins/contour/contour-cli.yaml ~/.hermes/skins/contour-cli.yaml
   ```

2. In `~/.hermes/config.yaml`, set `skin: contour-cli` under `display:`.
3. Restart Hermes.

## Update

- **Installed from Git:** run `hermes plugins update`, or use **Rescan** on the
  Plugins page.
- **Copied by hand:** run `git pull` in the folder. Hermes reloads the theme
  when `plugin.js` changes.

## Remove

1. Choose another theme in **Settings → Appearance**.
2. Remove the plugin from **Capabilities → Plugins**, or delete
   `~/.hermes/desktop-plugins/contour/`.

## Troubleshooting

**Contour is missing from Appearance.** Check **Capabilities → Plugins** for an
error next to Contour, then press ⌘K and run **Reload desktop plugins**.

**The theme looks like the default.** Choose Contour again in Appearance.
Hermes remembers your theme by name for each profile, so a renamed or
reinstalled theme needs picking again.

**One part looks wrong after a Hermes update.** Contour styles some parts of the
app through Hermes's own internal class names, which can change between
releases. Please open an issue with a screenshot and your Hermes version.
