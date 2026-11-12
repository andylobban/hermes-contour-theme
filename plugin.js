import { THEMES_AREA } from '@hermes/plugin-sdk'

const theme = {
  name: 'andy',
  label: 'Andy',
  description: 'Faithful editable copy of the installed Nous desktop theme',
  colors: {
    background: '#ffffff',
    foreground: '#1f2328',
    card: '#f6f8fa',
    cardForeground: '#1f2328',
    muted: '#f6f6f6',
    mutedForeground: '#656d76',
    popover: '#ffffff',
    popoverForeground: '#1f2328',
    primary: '#0053fd',
    primaryForeground: '#ffffff',
    secondary: '#deeaff',
    secondaryForeground: '#1f2328',
    accent: '#e3edff',
    accentForeground: '#1f2328',
    border: '#d0d7de',
    input: '#ffffff',
    ring: '#0053fd',
    midground: '#0053fd',
    midgroundForeground: '#ffffff',
    composerRing: '#0053fd',
    destructive: '#cf222e',
    destructiveForeground: '#ffffff',
    sidebarBackground: '#f6f8fa',
    sidebarBorder: '#d0d7de',
    userBubble: '#dae7fd',
    userBubbleBorder: '#d0d7de'
  },
  darkColors: {
    background: '#0d1117',
    foreground: '#e6edf3',
    card: '#010409',
    cardForeground: '#e6edf3',
    muted: '#1a1e24',
    mutedForeground: '#7d8590',
    popover: '#161b22',
    popoverForeground: '#e6edf3',
    primary: '#4a84fe',
    primaryForeground: '#161616',
    secondary: '#1d2e4f',
    secondaryForeground: '#e6edf3',
    accent: '#17243a',
    accentForeground: '#e6edf3',
    border: '#30363d',
    input: '#0d1117',
    ring: '#4a84fe',
    midground: '#4a84fe',
    midgroundForeground: '#161616',
    composerRing: '#4a84fe',
    destructive: '#f85149',
    destructiveForeground: '#ffffff',
    sidebarBackground: '#010409',
    sidebarBorder: '#30363d',
    userBubble: '#07162c',
    userBubbleBorder: '#30363d'
  },
  typography: {
    fontSans: '"Segoe WPC", "Segoe UI", -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", emoji',
    fontMono: '"JetBrains Mono", "Cascadia Code", "Cascadia Mono", "DejaVu Sans Mono", "Liberation Mono", "Noto Sans Mono", "Noto Mono", "SF Mono", ui-monospace, Menlo, Monaco, Consolas, monospace, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", emoji',
    fontUrl: 'https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap'
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
    foreground: '#e6edf3',
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
    // Registration only: the desktop's per-profile preferences select Andy.
    // Editing the palettes above hot-reloads this theme without changing picks.
  }
}
