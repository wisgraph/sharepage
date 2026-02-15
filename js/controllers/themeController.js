/**
 * Theme Controller
 * Handles theme-related UI updates and user interactions
 */

<<<<<<< HEAD
import { getTheme } from '../state/appState.js?v=1771151279067';
import { initThemeState, saveTheme, configureMermaid } from '../services/themeService.js?v=1771151279067';
import { applyThemeToBody, updateThemeIcon } from '../views/themeView.js?v=1771151279067';
=======
import { getTheme } from '../state/appState.js?v=1771151279067';
import { initThemeState, saveTheme, configureMermaid } from '../services/themeService.js?v=1771151279067';
import { applyThemeToBody, updateThemeIcon } from '../views/themeView.js?v=1771151279067';
>>>>>>> a21b6251ca0f7d8a48dfcc5ef7a112cc6774e9a5

/**
 * Initializes the theme UI and state
 */
export function initTheme() {
    const theme = initThemeState();
    applyThemeToBody(theme);
    updateThemeIcon(theme);
    configureMermaid(theme);
}

/**
 * Toggles the theme between light and dark
 */
export function toggleTheme() {
    const currentTheme = getTheme();
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    saveTheme(nextTheme);
    applyThemeToBody(nextTheme);
    updateThemeIcon(nextTheme);
    configureMermaid(nextTheme);

    console.log('[ThemeController] Switched to', nextTheme);

    // If mermaid diagrams exist, reload to re-render them (simplest consistent way)
    const mermaidElements = document.querySelectorAll('.mermaid');
    if (mermaidElements.length > 0) {
        location.reload();
    }
}
