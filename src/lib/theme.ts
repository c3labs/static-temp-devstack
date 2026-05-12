export const THEME_STORAGE_KEY = 'theme';

export type ThemeMode = 'light' | 'dark';

export function getPreferredScheme(): ThemeMode {
	if (typeof window === 'undefined') return 'light';
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function readStoredTheme(): ThemeMode | null {
	if (typeof window === 'undefined') return null;
	const v = localStorage.getItem(THEME_STORAGE_KEY);
	if (v === 'light' || v === 'dark') return v;
	return null;
}

export function applyTheme(mode: ThemeMode): void {
	document.documentElement.classList.toggle('dark', mode === 'dark');
	localStorage.setItem(THEME_STORAGE_KEY, mode);
}

export function resolveInitialTheme(): ThemeMode {
	return readStoredTheme() ?? getPreferredScheme();
}
