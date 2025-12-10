export type ThemeName =
    | 'black'
    | 'white'
    | 'deep-pink'
    | 'medium-orchid'
    | 'blue-violet'
    | 'slate-gray'
    | 'dark-turquoise'
    | 'light-sea-green'
    | 'royal-blue'
    | 'dodger-blue'
    | 'deep-sky-blue'
    | 'steel-blue';
export interface Theme {
    name: ThemeName;
    backgroundColor: string;
    textColor: string;
}
export interface CounterState {
    count: number;
    limit: number;
    limitEnabled: boolean;
    theme: ThemeName;
}
export type ScreenName = 'Intro' | 'Counter' | 'Info' | 'Settings' | 'Reset';