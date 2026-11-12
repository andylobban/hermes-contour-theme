import { THEMES_AREA } from '@hermes/plugin-sdk'

/**
 * Andy Desktop: monochrome. Charcoal with white accents in dark, paper with
 * near-black accents in light.
 *
 * The palettes below paint the app's seed colors. CUSTOM_CSS then pins the
 * exact surfaces and restyles tabs, the sidebar, fields and tooltips. Every
 * rule reads --andy-* variables, and only the two variable blocks at the top
 * of the CSS differ by mode.
 *
 * Loader rules: this file is evaluated uncompiled. Keep it to one file, and
 * never follow the module keywords with a quoted path inside a comment or a
 * string; the loader's scanner treats that as a real dependency.
 */

const CUSTOM_CSS = String.raw`
/* ── Light tokens ────────────────────────────────────────────────────── */
:root:root:not(.dark) {
  --andy-frame: #efefef;      /* titlebar, sidebar, window edge */
  --andy-panel: #ffffff;      /* main content panel */
  --andy-raised: #f5f5f5;     /* user message, popovers */
  --andy-field: #ffffff;      /* fields sit white on the frame */
  --andy-field-hover: #fafafa;
  --andy-hover: #e7e7e7;
  --andy-active: #e2e2e2;
  --andy-line: #e4e4e4;
  --andy-line-strong: #d6d6d6;
  --andy-text: #1a1a1a;       /* 17.4:1 on panel */
  --andy-text-2: #454545;     /*  7.4:1 or better */
  --andy-text-3: #595959;     /*  5.9:1 on active rows */
  --andy-text-4: #636363;     /*  4.6:1 on active rows */
  --andy-sidebar-text: #111111;
  --andy-sidebar-text-2: #2b2b2b;
  --andy-sidebar-text-3: #555555; /* 5.8:1 on active rows */
  --andy-accent-ink: #1a1a1a; /* links, status text */
  --andy-focus: #1a1a1a;
  --andy-cta: #1a1a1a;        /* primary button fill */
  --andy-cta-hover: #333333;
  --andy-cta-press: #000000;
  --andy-cta-ink: #ffffff;    /* 17.4:1 on the fill */
  --andy-ring-quiet: #949494; /* composer outline, 3.0:1 on white */
  --andy-seg-track: #e4e4e4;
  --andy-seg-active: #ffffff;
  --andy-seg-ink: #1a1a1a;
  --andy-tip-bg: #1f1f1f;
  --andy-tip-ink: #f5f5f5;
  --andy-scroll: #c4c4c4;
  --andy-code-bg: #f0f0f0;
  --andy-selection: color-mix(in srgb, #1a1a1a 14%, transparent);
}

/* ── Dark tokens ─────────────────────────────────────────────────────── */
:root:root.dark {
  --andy-frame: #262626;
  --andy-panel: #1b1b1b;
  --andy-raised: #2c2c2c;
  --andy-field: #2e2e2e;      /* 5.1:1 for the placeholder */
  --andy-field-hover: #333333;
  --andy-hover: #2a2a2a;
  --andy-active: #333333;
  --andy-line: #2e2e2e;
  --andy-line-strong: #3a3a3a;
  --andy-text: #ededed;       /* 14.7:1 on panel */
  --andy-text-2: #b4b4b4;     /*  8.3:1 on panel */
  --andy-text-3: #9e9e9e;     /*  4.7:1 or better on every surface */
  --andy-text-4: #919191;     /*  4.6:1 on frame */
  --andy-sidebar-text: #f5f5f5;   /* 13.9:1 on frame */
  --andy-sidebar-text-2: #e6e6e6; /* 12.1:1 */
  --andy-sidebar-text-3: #b8b8b8; /*  6.4:1 on active rows */
  --andy-accent-ink: #ffffff;
  --andy-focus: #ffffff;
  --andy-cta: #ffffff;        /* primary button fill */
  --andy-cta-hover: #e6e6e6;
  --andy-cta-press: #cccccc;
  --andy-cta-ink: #1a1a1a;    /* 17.4:1 on the fill */
  --andy-ring-quiet: #6b6b6b; /* composer outline, 3.2:1 */
  --andy-seg-track: #1b1b1b;
  --andy-seg-active: #3a3a3a;
  --andy-seg-ink: #f5f5f5;
  --andy-tip-bg: #2c2c2c;
  --andy-tip-ink: #ededed;
  --andy-scroll: #4a4a4a;
  --andy-code-bg: #2a2a2a;
  --andy-selection: color-mix(in srgb, #ffffff 22%, transparent);
}

/* ── Shared tokens ───────────────────────────────────────────────────── */
:root:root {
  /* Neutral grays everywhere: drop the accent tint from fills and lines */
  --theme-fill-primary-accent-mix: 0%;
  --theme-fill-secondary-accent-mix: 0%;
  --theme-fill-tertiary-accent-mix: 0%;
  --theme-fill-quaternary-accent-mix: 0%;
  --theme-fill-quinary-accent-mix: 0%;
  --theme-stroke-primary-accent-mix: 0%;
  --theme-stroke-secondary-accent-mix: 0%;
  --theme-stroke-tertiary-accent-mix: 0%;
  --theme-stroke-quaternary-accent-mix: 0%;
  --theme-row-hover-accent-mix: 0%;
  --theme-row-active-accent-mix: 0%;
  --theme-control-hover-accent-mix: 0%;
  --theme-control-active-accent-mix: 0%;

  /* Surfaces */
  --ui-bg-chrome: var(--andy-frame);
  --ui-bg-sidebar: var(--andy-frame);
  --ui-bg-editor: var(--andy-panel);
  --ui-bg-elevated: var(--andy-raised);
  --ui-bg-input: var(--andy-field);
  --ui-chat-surface-background: var(--andy-panel);
  --ui-sidebar-surface-background: var(--andy-frame);
  --ui-editor-surface-background: var(--andy-panel);
  --ui-widget-surface-background: var(--andy-frame);
  --ui-chat-bubble-background: var(--andy-raised);
  --ui-chat-bubble-opaque-background: var(--andy-raised);
  --ui-row-hover-background: var(--andy-hover);
  --ui-row-active-background: var(--andy-active);
  --ui-control-hover-background: var(--andy-hover);
  --ui-control-active-background: var(--andy-active);
  --chrome-action-hover: var(--andy-hover);

  /* Text */
  --ui-text-primary: var(--andy-text);
  --ui-text-secondary: var(--andy-text-2);
  --ui-text-tertiary: var(--andy-text-3);
  --ui-text-quaternary: var(--andy-text-4);

  /* Lines */
  --ui-stroke-primary: var(--andy-line-strong);
  --ui-stroke-secondary: var(--andy-line);
  --ui-stroke-tertiary: var(--andy-line);
  --sidebar-edge-border: transparent;

  /* shadcn tokens */
  --dt-card: var(--andy-panel);
  --dt-popover: var(--andy-raised);
  --dt-secondary: var(--andy-active);
  --dt-accent: var(--andy-active);
  --dt-sidebar-bg: var(--andy-frame);
  --dt-input-bg: 100%;
  --dt-input-border: 0%;
  --dt-input-inset: none;
  --dt-scrollbar-thumb: var(--andy-scroll);
  --ui-selection-background: var(--andy-selection);
  --ui-inline-code-background: var(--andy-code-bg);

  /* 8px corners on panels and fields (default scalar is 0.2) */
  --radius-scalar: 0.8;

  /* Chat column: 960px max, centered. The transcript and the composer
     both read this one variable. */
  --composer-width: 960px;

  /* Pane tabs */
  --pane-tab-active-accent: var(--andy-text);
  --pane-tab-strip-bg: var(--andy-frame);
  --pane-tab-active-bg: var(--andy-panel);
}

body {
  background: var(--andy-frame);
}

/* ── Pane tabs, shared: sentence case, no separators ─────────────────── */
[data-slot="pane-tab"] {
  font-size: 0.8125rem;
  border-left-width: 0;
}

[data-slot="pane-tab"] .uppercase {
  text-transform: none;
  letter-spacing: normal;
}

[data-slot="pane-tab"][data-active="false"] {
  color: var(--andy-text-3);
}

[data-slot="pane-tab"][data-active="false"]:hover {
  color: var(--andy-text);
}

/* ── Titlebar tabs: browser-style ────────────────────────────────────────
   The active tab is panel-colored with rounded top corners and flows into
   the content below. Inactive tabs sit on the frame. */
[class*="group/pane-header"][class*="app-region:drag"] {
  --pane-tab-active-bg: var(--andy-panel);
  --pane-tab-strip-bg: transparent;
  --pane-tab-active-accent: transparent;
  padding-top: 8px;
}

[class*="group/pane-header"][class*="app-region:drag"] [role="tablist"] {
  gap: 4px;
}

[class*="group/pane-header"][class*="app-region:drag"] [data-slot="pane-tab"] {
  padding: 0 8px;
  border-radius: 8px 8px 0 0;
  box-shadow: none;
}

[class*="group/pane-header"][class*="app-region:drag"] [data-slot="pane-tab"][data-active="false"]:hover {
  --pane-tab-strip-bg: var(--andy-hover);
  box-shadow: none;
}

/* ── Sessions sidebar ────────────────────────────────────────────────── */
[data-tour="sessions-sidebar"] {
  --ui-text-primary: var(--andy-sidebar-text);
  --ui-text-secondary: var(--andy-sidebar-text-2);
  --ui-text-tertiary: var(--andy-sidebar-text-3);
}

/* Sessions / Bots: a segmented control. The strip is anchored to the
   bottom of the titlebar area, which leaves room for a 32px control below
   the window buttons. It stays inside that area so nothing clips it. */
[data-tree-group]:has([data-tour="sessions-sidebar"]) [class*="group/pane-header"][class*="h-7"] {
  --pane-tab-strip-bg: transparent;
  --pane-tab-active-bg: var(--andy-seg-active);
  --pane-tab-active-accent: transparent;
  height: 32px;
  margin: 0 10px;
  padding: 4px;
  background: var(--andy-seg-track);
  border-radius: 8px;
}

[data-tree-group]:has([data-tour="sessions-sidebar"]) [class*="group/pane-header"][class*="h-7"] [role="tablist"] {
  gap: 4px;
}

[data-tree-group]:has([data-tour="sessions-sidebar"]) [class*="group/pane-header"][class*="h-7"] [data-slot="pane-tab"] {
  flex: 1 1 0;
  max-width: none;
  height: 24px;
  justify-content: center;
  border-radius: 6px;
  box-shadow: none;
  font-size: 0.8125rem;
  font-weight: 500;
  transition-property: background-color, color;
  transition-duration: 120ms;
}

[data-tree-group]:has([data-tour="sessions-sidebar"]) [class*="group/pane-header"][class*="h-7"] [data-slot="pane-tab"] > * {
  justify-content: center;
}

[data-tree-group]:has([data-tour="sessions-sidebar"]) [class*="group/pane-header"][class*="h-7"] [data-slot="pane-tab"][data-active="true"] {
  color: var(--andy-seg-ink);
}

[data-tree-group]:has([data-tour="sessions-sidebar"]) [class*="group/pane-header"][class*="h-7"] [data-slot="pane-tab"][data-active="false"]:hover {
  --pane-tab-strip-bg: var(--andy-hover);
  box-shadow: none;
}

/* Section labels (Pinned, Sessions): quiet gray, sentence case, no
   dithered dot. Matches the uppercase + 0.16em tracking pair. */
.uppercase[class*="tracking-[0.16em]"] {
  color: var(--andy-text-3);
  text-transform: none;
  letter-spacing: normal;
  font-size: 0.75rem;
  font-weight: 500;
}

.uppercase[class*="tracking-[0.16em]"] > .dither {
  display: none;
}

/* Date dividers (Earlier this week) read as children of Sessions:
   indented to the session titles, one step smaller. */
.uppercase[class*="tracking-[0.12em]"] {
  padding-left: 12px;
  color: var(--andy-text-3);
  text-transform: none;
  letter-spacing: normal;
  font-size: 0.6875rem;
  font-weight: 500;
}

/* Pinned shows only when something is pinned: hide the section while its
   only content is the empty hint. */
[data-session-pin-drop]:has(> [data-slot="sidebar-group-content"] > div:only-child > span > .codicon-pin) {
  display: none;
}

/* Session rows: no bullet for quiet sessions. Hides the gray idle dot
   (unless it carries a project color) and the hollow draft ring. Status
   dots that mean something (needs input, running, finished unread) stay.
   visibility keeps the slot, so titles hold one left edge when a status
   dot appears. */
[data-tour="sessions-sidebar"] span[aria-hidden="true"][class^="size-1 rounded-full"]:not([style*="background"]),
[data-tour="sessions-sidebar"] span[class*="size-1.5"][class*="border-(--ui-text-quaternary)"] {
  visibility: hidden;
}

/* Search: a filled field, readable at rest. The stock field fades to 30%
   opacity until focused. */
[class*="opacity-30"][class*="focus-within:opacity-100"] {
  opacity: 1;
  width: 100%;
  height: 32px;
  margin-bottom: 8px;
  padding: 0 12px;
  gap: 8px;
  background: var(--andy-field);
  border: 0;
  border-radius: 8px;
}

[class*="opacity-30"][class*="focus-within:opacity-100"]:hover {
  background: var(--andy-field-hover);
}

[class*="opacity-30"][class*="focus-within:opacity-100"]:focus-within {
  outline: 2px solid var(--andy-focus);
  outline-offset: 2px;
}

[class*="opacity-30"][class*="focus-within:opacity-100"] > input:focus-visible {
  outline: none;
}

/* ── Tooltips ────────────────────────────────────────────────────────── */
[data-slot="tooltip-content"] {
  background: var(--andy-tip-bg);
  color: var(--andy-tip-ink);
  border-radius: 8px;
}

[data-slot="tooltip-arrow"],
[data-slot="tooltip-arrow"] path {
  fill: var(--andy-tip-bg);
}

/* ── Primary button: the accent fill with inverse ink ────────────────── */
[data-slot="button"][data-variant="default"] {
  background: var(--andy-cta);
  color: var(--andy-cta-ink);
  border-radius: 6px;
}

[data-slot="button"][data-variant="default"]:hover {
  background: var(--andy-cta-hover);
}

[data-slot="button"][data-variant="default"]:active {
  background: var(--andy-cta-press);
}

[data-slot="button"]:not([data-variant="default"]) {
  border-radius: 6px;
}

/* ── Segmented tabs (Radix): track with a raised pill ────────────────── */
[data-slot="tabs-list"] {
  background: var(--andy-seg-track);
  border-radius: 8px;
  padding: 4px;
}

[data-slot="tabs-trigger"] {
  border-radius: 6px;
  color: var(--andy-text-2);
  transition-property: background-color, color;
}

[data-slot="tabs-trigger"]:hover:not([data-state="active"]) {
  color: var(--andy-text);
  background: var(--andy-hover);
}

[data-slot="tabs-trigger"][data-state="active"] {
  background: var(--andy-seg-active);
  color: var(--andy-seg-ink);
  box-shadow: none;
}

/* ── Fields: filled, no border at rest ───────────────────────────────── */
[data-slot="input"],
[data-slot="input-group"] {
  background: var(--andy-field);
  border-radius: 8px;
}

[data-slot="input"]::placeholder {
  color: var(--andy-text-3);
}

/* ── Menus and dialogs ───────────────────────────────────────────────── */
[data-slot="dropdown-menu-content"],
[data-slot="dropdown-menu-sub-content"],
[data-slot="dialog-content"] {
  background: var(--andy-raised);
  border-color: var(--andy-line-strong);
  border-radius: 8px;
}

/* ── Focus: one visible ring on every control ────────────────────────── */
:is(button, a, input, textarea, select, [role="tab"], [role="menuitem"], [tabindex]):focus-visible {
  outline: 2px solid var(--andy-focus);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  [data-slot="tabs-trigger"],
  [data-slot="pane-tab"],
  [data-slot="button"] {
    transition: none;
  }
}
`

const light = {
  background: '#ffffff',
  foreground: '#1a1a1a',
  card: '#ffffff',
  cardForeground: '#1a1a1a',
  muted: '#efefef',
  mutedForeground: '#595959',
  popover: '#f5f5f5',
  popoverForeground: '#1a1a1a',
  primary: '#1a1a1a',
  primaryForeground: '#ffffff',
  secondary: '#e2e2e2',
  secondaryForeground: '#1a1a1a',
  accent: '#e2e2e2',
  accentForeground: '#1a1a1a',
  border: '#e4e4e4',
  input: '#ffffff',
  ring: '#1a1a1a',
  midground: '#1a1a1a',
  midgroundForeground: '#ffffff',
  composerRing: '#949494',
  destructive: '#c62828',
  destructiveForeground: '#ffffff',
  sidebarBackground: '#efefef',
  sidebarBorder: '#e4e4e4',
  userBubble: '#f5f5f5',
  userBubbleBorder: '#f5f5f5'
}

const dark = {
  background: '#1b1b1b',
  foreground: '#ededed',
  card: '#1b1b1b',
  cardForeground: '#ededed',
  muted: '#262626',
  mutedForeground: '#9e9e9e',
  popover: '#2c2c2c',
  popoverForeground: '#ededed',
  primary: '#ffffff',
  primaryForeground: '#1a1a1a',
  secondary: '#333333',
  secondaryForeground: '#ededed',
  accent: '#333333',
  accentForeground: '#ededed',
  border: '#2e2e2e',
  input: '#2e2e2e',
  ring: '#ffffff',
  midground: '#ffffff',
  midgroundForeground: '#1a1a1a',
  composerRing: '#6b6b6b',
  destructive: '#f26b6b',
  destructiveForeground: '#1a1a1a',
  sidebarBackground: '#262626',
  sidebarBorder: '#2e2e2e',
  userBubble: '#2c2c2c',
  userBubbleBorder: '#2c2c2c'
}

const theme = {
  name: 'andy-desktop',
  label: 'Andy Desktop',
  description: 'Monochrome: charcoal and white in dark, paper and black in light',
  colors: light,
  darkColors: dark,
  customCSS: CUSTOM_CSS,
  typography: {
    fontSans: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    fontMono: '"JetBrains Mono", "SF Mono", ui-monospace, Menlo, Monaco, Consolas, monospace'
  },
  terminal: {
    foreground: '#1f2328',
    black: '#24292f',
    red: '#cf222e',
    green: '#116329',
    yellow: '#4d2d00',
    blue: '#0969da',
    magenta: '#8250df',
    cyan: '#1b7c83',
    white: '#6e7781',
    brightBlack: '#57606a',
    brightRed: '#a40e26',
    brightGreen: '#1a7f37',
    brightYellow: '#633c01',
    brightBlue: '#218bff',
    brightMagenta: '#a475f9',
    brightCyan: '#3192aa',
    brightWhite: '#8c959f'
  },
  darkTerminal: {
    foreground: '#ededed',
    black: '#484f58',
    red: '#ff7b72',
    green: '#3fb950',
    yellow: '#d29922',
    blue: '#58a6ff',
    magenta: '#bc8cff',
    cyan: '#39c5cf',
    white: '#b1bac4',
    brightBlack: '#6e7681',
    brightRed: '#ffa198',
    brightGreen: '#56d364',
    brightYellow: '#e3b341',
    brightBlue: '#79c0ff',
    brightMagenta: '#d2a8ff',
    brightCyan: '#56d4dd',
    brightWhite: '#ffffff'
  }
}

export default {
  id: 'andy',
  name: 'Andy theme',
  register(ctx) {
    ctx.register({ id: 'theme', area: THEMES_AREA, data: theme })
  }
}
