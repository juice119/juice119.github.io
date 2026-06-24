export type ThemeMode = 'light' | 'dark';

export interface Theme {
  mode: ThemeMode;
  colors: {
    background: string;
    cardBackground: string;
    text: string;
    textSecondary: string;
    accent: string;
    border: string;
    noticeBackground: string;
    noticeBorder: string;
    fabBackground: string;
    fabBorder: string;
    fabShadow: string;
    profileImageBorder: string;
  };
}

export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    background: '#f1f5f9',
    cardBackground: '#f1f5f9',
    text: '#1e293b',
    textSecondary: '#64748b',
    accent: '#3b82f6',
    border: '#e2e8f0',
    noticeBackground: '#eff6ff',
    noticeBorder: '#bfdbfe',
    fabBackground: '#ffffff',
    fabBorder: '#e2e8f0',
    fabShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
    profileImageBorder: '#3b82f6',
  },
};

export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    background: '#0b1120',
    cardBackground: '#1e293b',
    text: '#f1f5f9',
    textSecondary: '#94a3b8',
    accent: '#38bdf8',
    border: '#334155',
    noticeBackground: '#1e293b',
    noticeBorder: '#38bdf8',
    fabBackground: '#1e293b',
    fabBorder: '#38bdf8',
    fabShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
    profileImageBorder: '#38bdf8',
  },
};

export const themes: Record<ThemeMode, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};
