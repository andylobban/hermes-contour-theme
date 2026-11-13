import { THEMES_AREA } from '@hermes/plugin-sdk'

/**
 * Contour: monochrome. Charcoal with white accents in dark, paper with
 * near-black accents in light.
 *
 * The palettes below paint the app's seed colors. CUSTOM_CSS then pins the
 * exact surfaces and restyles tabs, the sidebar, fields and tooltips. Every
 * rule reads --contour-* variables, and only the two variable blocks at the top
 * of the CSS differ by mode.
 *
 * Loader rules: this file is evaluated uncompiled. Keep it to one file, and
 * never follow the module keywords with a quoted path inside a comment or a
 * string; the loader's scanner treats that as a real dependency.
 */

// Every side zone: a tree group holding one of the side panes, but never
// the main zone, whose tab strip sits in the titlebar. Test the strip
// itself: every top-edge zone, sidebars included, also carries a bare
// window-drag overlay. Pane ids from a plugin carry its id as a prefix.
const SIDE_PANES = ['sessions', 'hermes-bots:pane', 'hermes-bots:routines', 'files', 'review']
const SB =
  '[data-tree-group]:is(' +
  SIDE_PANES.map(id => `:has([data-tree-tab="${id}"])`).join(', ') +
  '):not(:has([class*="group/pane-header"][class*="app-region:drag"]))'

// The main zone: the tree group whose own tab strip sits in the titlebar.
const MAIN = '[data-tree-group]:has(> [data-panel-header] [class*="group/pane-header"][class*="app-region:drag"])'

const CUSTOM_CSS = String.raw`
/* ── Light tokens ────────────────────────────────────────────────────── */
:root:root:not(.dark) {
  --contour-frame: #efefef;      /* titlebar, sidebar, window edge */
  --contour-panel: #ffffff;      /* main content panel */
  --contour-raised: #f5f5f5;     /* user message, popovers */
  --contour-field: #ffffff;      /* fields sit white on the frame */
  --contour-field-hover: #fafafa;
  --contour-hover: #e7e7e7;
  --contour-active: #e2e2e2;
  --contour-line: #e4e4e4;
  --contour-line-strong: #d6d6d6;
  --contour-text: #1a1a1a;       /* 17.4:1 on panel */
  --contour-text-2: #454545;     /*  7.4:1 or better */
  --contour-text-3: #595959;     /*  5.9:1 on active rows */
  --contour-text-4: #636363;     /*  4.6:1 on active rows */
  --contour-sidebar-text: #111111;
  --contour-sidebar-text-2: #2b2b2b;
  --contour-sidebar-text-3: #555555; /* 5.8:1 on active rows */
  --contour-accent-ink: #1a1a1a; /* links, status text */
  --contour-focus: #1a1a1a;
  --contour-cta: #1a1a1a;        /* primary button fill */
  --contour-cta-hover: #333333;
  --contour-cta-press: #000000;
  --contour-cta-ink: #ffffff;    /* 17.4:1 on the fill */
  --contour-round-bg: #404040;   /* voice / send button, one step quieter */
  --contour-round-hover: #2b2b2b;
  --contour-round-ink: #ffffff;  /* 10.4:1 */
  --contour-badge-bg: #dedede;   /* Sign in and other solid badges */
  --contour-badge-ink: #333333;  /* 9.4:1 */
  --contour-ring-quiet: #949494; /* composer outline, 3.0:1 on white */
  --contour-seg-track: #e4e4e4;
  --contour-seg-active: #ffffff;
  --contour-seg-ink: #1a1a1a;
  --contour-tip-bg: #1f1f1f;
  --contour-tip-ink: #f5f5f5;
  --contour-scroll: #c4c4c4;
  --contour-code-bg: #f0f0f0;
  --contour-selection: color-mix(in srgb, #1a1a1a 14%, transparent);
}

/* ── Dark tokens ─────────────────────────────────────────────────────── */
:root:root.dark {
  --contour-frame: #262626;
  --contour-panel: #1b1b1b;
  --contour-raised: #2c2c2c;
  --contour-field: #2e2e2e;      /* 5.1:1 for the placeholder */
  --contour-field-hover: #333333;
  --contour-hover: #2a2a2a;
  --contour-active: #333333;
  --contour-line: #2e2e2e;
  --contour-line-strong: #3a3a3a;
  --contour-text: #ededed;       /* 14.7:1 on panel */
  --contour-text-2: #b4b4b4;     /*  8.3:1 on panel */
  --contour-text-3: #9e9e9e;     /*  4.7:1 or better on every surface */
  --contour-text-4: #919191;     /*  4.6:1 on frame */
  --contour-sidebar-text: #f5f5f5;   /* 13.9:1 on frame */
  --contour-sidebar-text-2: #e6e6e6; /* 12.1:1 */
  --contour-sidebar-text-3: #b8b8b8; /*  6.4:1 on active rows */
  --contour-accent-ink: #ffffff;
  --contour-focus: #ffffff;
  --contour-cta: #ffffff;        /* primary button fill */
  --contour-cta-hover: #e6e6e6;
  --contour-cta-press: #cccccc;
  --contour-cta-ink: #1a1a1a;    /* 17.4:1 on the fill */
  --contour-round-bg: #bdbdbd;   /* voice / send button, one step quieter */
  --contour-round-hover: #cccccc;
  --contour-round-ink: #1a1a1a;  /* 9.3:1 */
  --contour-badge-bg: #383838;   /* Sign in and other solid badges */
  --contour-badge-ink: #cfcfcf;  /* 7.5:1 */
  --contour-ring-quiet: #6b6b6b; /* composer outline, 3.2:1 */
  --contour-seg-track: #1b1b1b;
  --contour-seg-active: #3a3a3a;
  --contour-seg-ink: #f5f5f5;
  --contour-tip-bg: #2c2c2c;
  --contour-tip-ink: #ededed;
  --contour-scroll: #4a4a4a;
  --contour-code-bg: #2a2a2a;
  --contour-selection: color-mix(in srgb, #ffffff 22%, transparent);
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
  --ui-bg-chrome: var(--contour-frame);
  --ui-bg-sidebar: var(--contour-frame);
  --ui-bg-editor: var(--contour-panel);
  --ui-bg-elevated: var(--contour-raised);
  --ui-bg-input: var(--contour-field);
  --ui-chat-surface-background: var(--contour-panel);
  --ui-sidebar-surface-background: var(--contour-frame);
  --ui-editor-surface-background: var(--contour-panel);
  --ui-widget-surface-background: var(--contour-frame);
  --ui-chat-bubble-background: var(--contour-raised);
  --ui-chat-bubble-opaque-background: var(--contour-raised);
  --ui-row-hover-background: var(--contour-hover);
  --ui-row-active-background: var(--contour-active);
  --ui-control-hover-background: var(--contour-hover);
  --ui-control-active-background: var(--contour-active);
  --chrome-action-hover: var(--contour-hover);

  /* Text */
  --ui-text-primary: var(--contour-text);
  --ui-text-secondary: var(--contour-text-2);
  --ui-text-tertiary: var(--contour-text-3);
  --ui-text-quaternary: var(--contour-text-4);

  /* Lines */
  --ui-stroke-primary: var(--contour-line-strong);
  --ui-stroke-secondary: var(--contour-line);
  --ui-stroke-tertiary: var(--contour-line);
  --sidebar-edge-border: transparent;

  /* shadcn tokens */
  --dt-card: var(--contour-panel);
  --dt-popover: var(--contour-raised);
  --dt-secondary: var(--contour-active);
  --dt-accent: var(--contour-active);
  --dt-sidebar-bg: var(--contour-frame);
  --dt-input-bg: 100%;
  --dt-input-border: 0%;
  --dt-input-inset: none;
  --dt-scrollbar-thumb: var(--contour-scroll);
  --ui-selection-background: var(--contour-selection);
  --ui-inline-code-background: var(--contour-code-bg);

  /* 8px corners on panels and fields (default scalar is 0.2) */
  --radius-scalar: 0.8;

  /* Chat column: 800px max, centered. The transcript and the composer
     both read this one variable. */
  --contour-column: 800px;
  --composer-width: var(--contour-column);

  /* Pane tabs */
  --pane-tab-active-accent: var(--contour-text);
  --pane-tab-strip-bg: var(--contour-frame);
  --pane-tab-active-bg: var(--contour-panel);
}

body {
  background: var(--contour-frame);
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
  color: var(--contour-text-3);
}

[data-slot="pane-tab"][data-active="false"]:hover {
  color: var(--contour-text);
}

/* ── Titlebar tabs: browser-style ────────────────────────────────────────
   The active tab is panel-colored with rounded top corners and flows into
   the content below. Inactive tabs sit on the frame. */
[class*="group/pane-header"][class*="app-region:drag"] {
  --pane-tab-active-bg: var(--contour-panel);
  --pane-tab-strip-bg: transparent;
  --pane-tab-active-accent: transparent;
  /* Tabs start 4px under the window top, like a browser, so the label has
     room to breathe inside a taller tab. */
  padding-top: 4px;
}

[class*="group/pane-header"][class*="app-region:drag"] [role="tablist"] {
  gap: 4px;
  /* Room for the active tab's bottom flares; the list clips overflow. */
  padding-inline: 8px;
}

[class*="group/pane-header"][class*="app-region:drag"] [data-slot="pane-tab"] {
  /* 12px, measured against the reference: its capitals are 18px tall at 2x
     where 13px tab text measured 20px. */
  font-size: 0.75rem;
  padding: 0 8px;
  border-radius: 6px 6px 0 0;
  box-shadow: none;
}

/* Browser-style outline: a 1px line runs along the bottom of the strip,
   and the active tab is outlined on its top and sides. The active tab is
   panel-colored and paints over the strip's line, so the line breaks under
   it and the tab flows into the content below. */
[class*="group/pane-header"][class*="app-region:drag"] {
  box-shadow: inset 0 -1px 0 var(--contour-line-strong);
}

[class*="group/pane-header"][class*="app-region:drag"] [data-slot="pane-tab"][data-active="true"] {
  box-shadow:
    inset 1px 0 0 var(--contour-line-strong),
    inset -1px 0 0 var(--contour-line-strong),
    inset 0 1px 0 var(--contour-line-strong);
}

/* Bottom flares: a concave curve on each side of the active tab carries
   its outline into the baseline, like a browser tab. Each is a 7px square
   that overlaps the tab by 1px: transparent inside a 7px circle, a 1px
   ring in the line color, panel color beyond. The overlap paints panel
   over the bottom of the tab's straight side border, so the outline turns
   into the curve instead of running past it, and the ring's top end lands
   on that border. */
[class*="group/pane-header"][class*="app-region:drag"] [data-slot="pane-tab"][data-active="true"]::before,
[class*="group/pane-header"][class*="app-region:drag"] [data-slot="pane-tab"][data-active="true"]::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 7px;
  height: 7px;
  pointer-events: none;
}

[class*="group/pane-header"][class*="app-region:drag"] [data-slot="pane-tab"][data-active="true"]::before {
  left: -6px;
  background: radial-gradient(circle at 0 0,
    transparent 5.5px,
    var(--contour-line-strong) 6px,
    var(--contour-line-strong) 7px,
    var(--contour-panel) 7.5px);
}

[class*="group/pane-header"][class*="app-region:drag"] [data-slot="pane-tab"][data-active="true"]::after {
  right: -6px;
  background: radial-gradient(circle at 100% 0,
    transparent 5.5px,
    var(--contour-line-strong) 6px,
    var(--contour-line-strong) 7px,
    var(--contour-panel) 7.5px);
}

/* The strip does not span the whole header (the titlebar keeps room on
   the right), so the header row carries the same baseline to the zone's
   right edge. The strip paints over it with its own line. */
${MAIN} > [data-panel-header] {
  box-shadow: inset 0 -1px 0 var(--contour-line-strong);
}

/* The chat body gets the same 1px line down its left and right edges,
   meeting the baseline. Drawn on an overlay so the content's own fill
   cannot cover it. The body is sometimes wrapped in a display:contents
   menu element, so both shapes are matched. */
${MAIN} > [data-zone-body] > .flex-1::after,
${MAIN} > .flex-1:not([data-panel-header])::after {
  content: "";
  position: absolute;
  inset: 0;
  border-left: 1px solid var(--contour-line-strong);
  border-right: 1px solid var(--contour-line-strong);
  pointer-events: none;
  z-index: 50;
}

/* Status dot in a titlebar tab: centred between the tab edge and the
   title. Stock spacing put it 16px from the edge and 4px from the text.
   Tab pad 8px + 2px = 10px before the 6px dot; 1px + the label's 8px
   pad + ~1px glyph bearing = 10px after it. */
[class*="group/pane-header"][class*="app-region:drag"] [data-slot="pane-tab"] span[class*="ml-2"][class*="-mr-1"] {
  margin-left: 2px;
  margin-right: 1px;
}

[class*="group/pane-header"][class*="app-region:drag"] [data-slot="pane-tab"][data-active="false"]:hover {
  --pane-tab-strip-bg: var(--contour-hover);
  box-shadow: none;
}

/* ── Sidebars ────────────────────────────────────────────────────────────
   The SB selector (defined above CUSTOM_CSS) matches every side zone: the one with
   Sessions/Bots on the left and the one with Scheduled jobs, Files or
   Review on the right. All of them share one surface, one text ramp, one
   tab control, one heading style and one search field, so the two sides
   read as the same piece of chrome whichever tab is showing. */
${SB} {
  --ui-bg-editor: var(--contour-frame);
  --ui-surface-background: var(--contour-frame);
  --ui-editor-surface-background: var(--contour-frame);
  --ui-chat-surface-background: var(--contour-frame);
  --ui-widget-surface-background: var(--contour-frame);
  --ui-text-primary: var(--contour-sidebar-text);
  --ui-text-secondary: var(--contour-sidebar-text-2);
  --ui-text-tertiary: var(--contour-sidebar-text-3);
  background: var(--contour-frame);
}

/* Tab strip: a segmented control. Hermes pins the strip to the bottom of a
   62px sidebar header (34px titlebar + 28px strip). The chat zone's header
   is 34px, and its 1px outline runs along that header's last row, y=33. A
   28px control lifted 1px spans y=33 to 61, so its top lines up with the
   top of the chat window's outline. */
${SB} [class*="group/pane-header"][class*="h-7"] {
  --pane-tab-strip-bg: transparent;
  --pane-tab-active-bg: var(--contour-seg-active);
  --pane-tab-active-accent: transparent;
  height: 28px;
  bottom: 1px;
  margin: 0 10px;
  padding: 4px;
  background: var(--contour-seg-track);
  border-radius: 8px;
}

${SB} [class*="group/pane-header"][class*="h-7"] [role="tablist"] {
  gap: 4px;
}

${SB} [class*="group/pane-header"][class*="h-7"] [data-slot="pane-tab"] {
  flex: 1 1 0;
  max-width: none;
  /* 20px segments: 2px less room above and below the label than the old
     24px. 11px text (2px under the stock 13px). Inactive labels measure
     5.5:1 light and 6.4:1 dark on the track; active 17.4:1 and 10.4:1. */
  height: 20px;
  justify-content: center;
  border-radius: 6px;
  box-shadow: none;
  font-size: 0.6875rem;
  font-weight: 500;
  transition-property: background-color, color;
  transition-duration: 120ms;
}

${SB} [class*="group/pane-header"][class*="h-7"] [data-slot="pane-tab"] > * {
  justify-content: center;
}

/* Label side padding: 6px, 2px under the stock 8px. */
${SB} [class*="group/pane-header"][class*="h-7"] [data-slot="pane-tab"] > .pane-tab-content > [class*="px-2"] {
  padding-inline: 6px;
}

${SB} [class*="group/pane-header"][class*="h-7"] [data-slot="pane-tab"][data-active="true"] {
  color: var(--contour-seg-ink);
}

${SB} [class*="group/pane-header"][class*="h-7"] [data-slot="pane-tab"][data-active="false"]:hover {
  --pane-tab-strip-bg: var(--contour-hover);
  box-shadow: none;
}

/* Headings: every small uppercase, letter-spaced label in a sidebar
   (Pinned, Sessions, BOTS, NETCUP VPS, SCHEDULED JOBS) becomes the same
   quiet sentence-case label. Tab labels are excluded. */
.uppercase[class*="tracking-[0.16em]"],
${SB} .uppercase[class*="tracking-"]:not([data-slot="pane-tab"] *) {
  color: var(--contour-text-3);
  text-transform: none;
  letter-spacing: normal;
  font-size: 0.75rem;
  font-weight: 500;
}

.uppercase[class*="tracking-[0.16em]"] > .dither {
  display: none;
}

/* Date dividers (Earlier this week) read as children of Sessions:
   indented to the session titles, one step smaller. A title starts 28px
   into its row (8px pad + 14px dot slot + 6px gap); the divider row has
   its own 8px pad, so its text moves in the remaining 20px. */
${SB} .uppercase[class*="tracking-[0.12em]"]:not([data-slot="pane-tab"] *) {
  padding-left: 20px;
  font-size: 0.6875rem;
}

/* Pinned shows only when something is pinned: hide the section while its
   only content is the empty hint. */
[data-session-pin-drop]:has(> [data-slot="sidebar-group-content"] > div:only-child > span > .codicon-pin) {
  display: none;
}

/* Rows: no bullet for quiet sessions or bots. Hides the gray idle dot
   (unless it carries a project color) and the hollow draft ring. Status
   dots that mean something (needs input, running, finished unread) stay.
   visibility keeps the slot, so names hold one left edge when a status
   dot appears. */
${SB} span[aria-hidden="true"][class^="size-1 rounded-full"]:not([style*="background"]),
${SB} span[class*="size-1.5"][class*="border-(--ui-text-quaternary)"] {
  visibility: hidden;
}

/* Search: the stock sidebar field is an underline that fades to 30-50%
   opacity until focused. Here it is a filled field, readable at rest.
   Matches the field's own focus-underline utility, which only the bare
   search field carries. */
${SB} [class*="border-b"][class*="has-[>input:focus]:border-ring"] {
  opacity: 1;
  width: 100%;
  height: 32px;
  margin-bottom: 8px;
  padding: 0 12px;
  gap: 8px;
  background: var(--contour-field);
  border: 0;
  border-radius: 8px;
}

${SB} [class*="border-b"][class*="has-[>input:focus]:border-ring"]:hover {
  background: var(--contour-field-hover);
}

${SB} [class*="border-b"][class*="has-[>input:focus]:border-ring"]:focus-within {
  outline: 2px solid var(--contour-focus);
  outline-offset: 2px;
}

${SB} [class*="border-b"][class*="has-[>input:focus]:border-ring"] > input:focus-visible {
  outline: none;
}

${SB} [class*="border-b"][class*="has-[>input:focus]:border-ring"] > input::placeholder {
  color: var(--contour-sidebar-text-3);
}

/* Session rows: the hover and selected band lines up with the search
   field. Rows span the sidebar content box, but the search field sits in a
   further 8px inset, so the band starts 8px in. The row's own 8px lead
   padding comes out by the same amount, so titles do not move. Branch
   rows keep their extra 6px of indent. */
${SB} .row-hover {
  margin-left: 8px;
}

${SB} .row-hover > .cursor-pointer {
  padding-left: 0;
}

${SB} .row-hover > .cursor-pointer[class*="pl-3.5"] {
  padding-left: 6px;
}

/* Session rows: 50% more room above and below the title. Stock, the 17.55px
   title line (13px at 1.35 leading) centres in a 26px minimum row, leaving
   about 4.2px each side. 6.3px each side makes the row about 30px. Inline
   rows only; card rows keep their own spacing. */
${SB} .row-hover > .cursor-pointer:not([class*="flex-col"]) {
  padding-block: 6.3px;
}

/* With the lead padding gone, the 14px dot slot sat flush on the band's
   edge. Nudge it so the dot sits optically centred between the band edge
   and the title's first glyph (which carries ~2.5px of side bearing past
   the 20px text box). Measured on screen: 4.5px. Inline rows only; card
   and branch rows lay out differently. */
${SB} .row-hover > .cursor-pointer:not([class*="flex-col"]):not([class*="pl-3.5"]) > :first-child {
  translate: 4.5px 0;
}

/* Bot rows: bold name, and the preview line under it starts on the
   name's left edge. The name follows a 14px status-dot slot and a 6px gap,
   so the second line moves in by the same 20px. */
${SB} [data-roster-key] > .flex-1 > div:first-child span.font-medium {
  font-weight: 700;
}

${SB} [data-roster-key] > .flex-1 > div:nth-child(2) {
  padding-left: 20px;
}

/* ── Tooltips ────────────────────────────────────────────────────────── */
[data-slot="tooltip-content"] {
  background: var(--contour-tip-bg);
  color: var(--contour-tip-ink);
  border-radius: 8px;
}

[data-slot="tooltip-arrow"],
[data-slot="tooltip-arrow"] path {
  fill: var(--contour-tip-bg);
}

/* ── Primary button: the accent fill with inverse ink ────────────────── */
[data-slot="button"][data-variant="default"] {
  background: var(--contour-cta);
  color: var(--contour-cta-ink);
  border-radius: 6px;
}

[data-slot="button"][data-variant="default"]:hover {
  background: var(--contour-cta-hover);
}

[data-slot="button"][data-variant="default"]:active {
  background: var(--contour-cta-press);
}

[data-slot="button"]:not([data-variant="default"]) {
  border-radius: 6px;
}

/* ── Composer: same edges as the text column ────────────────────────────
   The transcript column is min(800px, pane) with 24px padding each side,
   so its text runs min(800px, pane) - 48px wide. The composer dock used the
   full 800px. Match the text, keeping the dock's 10px drag margin
   (5px each side, outside the visible box). */
[data-slot="composer-dock"] {
  --composer-width: calc(var(--contour-column) - 3rem);
  width: calc(min(var(--contour-column), 100%) - 3rem + 10px);
}

[data-slot="composer-root"]:not([data-slot="composer-dock"] *) {
  --composer-width: calc(var(--contour-column) - 3rem);
}

/* ── User messages: right-aligned bubbles, at most 70% of the column ──
   Short messages shrink to fit; long ones wrap at 70%. Only the read-only
   bubble (it carries cursor-pointer); the inline editor keeps full width
   so there is room to edit. Corners are half the stock 12.8px. */
[data-slot="aui_user-message-root"] .composer-human-message.cursor-pointer {
  width: fit-content;
  max-width: 70%;
  margin-left: auto;
  border-radius: 6px;
}

/* The stuck prompt clips everything scrolling beneath it across the full
   column width, which made sense for a full-width bubble. With a 70%
   bubble on the right, that hid reply text to its left. Drop the clip and
   give the bubble an opaque fill instead: text scrolls past on the left
   and only the bubble itself covers what is under it. */
:root [data-sticky-prompt-clip] {
  clip-path: none;
}

[data-slot="aui_user-message-root"] .composer-human-message.cursor-pointer {
  background: var(--contour-raised);
}

/* ── Composer round button (voice, send): softer than the full accent ── */
[data-slot="button"][class*="bg-foreground"] {
  background: var(--contour-round-bg);
  color: var(--contour-round-ink);
  border-radius: 999px;
}

[data-slot="button"][class*="bg-foreground"][class*="rounded-r-none"] {
  border-radius: 999px 0 0 999px;
}

[data-slot="button"][class*="bg-foreground"]:hover {
  background: var(--contour-round-hover);
}

[data-slot="button"][class*="bg-foreground"]:disabled {
  background: var(--contour-round-bg);
  opacity: 0.4;
}

/* ── Solid badges (Sign in): a quiet gray chip, not an accent fill ───── */
[data-slot="badge"][class*="bg-primary"] {
  background: var(--contour-badge-bg);
  color: var(--contour-badge-ink);
}

/* ── Segmented tabs (Radix): track with a raised pill ────────────────── */
[data-slot="tabs-list"] {
  background: var(--contour-seg-track);
  border-radius: 8px;
  padding: 4px;
}

[data-slot="tabs-trigger"] {
  border-radius: 6px;
  color: var(--contour-text-2);
  transition-property: background-color, color;
}

[data-slot="tabs-trigger"]:hover:not([data-state="active"]) {
  color: var(--contour-text);
  background: var(--contour-hover);
}

[data-slot="tabs-trigger"][data-state="active"] {
  background: var(--contour-seg-active);
  color: var(--contour-seg-ink);
  box-shadow: none;
}

/* ── Fields: filled, no border at rest ───────────────────────────────── */
[data-slot="input"],
[data-slot="input-group"] {
  background: var(--contour-field);
  border-radius: 8px;
}

[data-slot="input"]::placeholder {
  color: var(--contour-text-3);
}

/* ── Menus and dialogs ───────────────────────────────────────────────── */
[data-slot="dropdown-menu-content"],
[data-slot="dropdown-menu-sub-content"],
[data-slot="dialog-content"] {
  background: var(--contour-raised);
  border-color: var(--contour-line-strong);
  border-radius: 8px;
}

/* ── Focus: one visible ring on every control ────────────────────────── */
:is(button, a, input, textarea, select, [role="tab"], [role="menuitem"], [tabindex]):focus-visible {
  outline: 2px solid var(--contour-focus);
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
  name: 'contour',
  label: 'Contour',
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
  id: 'contour',
  name: 'Contour theme',
  register(ctx) {
    ctx.register({ id: 'theme', area: THEMES_AREA, data: theme })
  }
}
