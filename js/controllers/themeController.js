/**
 * Theme Controller
 * Handles theme-related UI updates and user interactions
 */

import { getTheme } from '../state/appState.js?v=41000';
import { initThemeState, saveTheme, configureMermaid } from '../services/themeService.js?v=41000';

/**
 * Initializes the theme UI and state
 */
export function initTheme() {
    const theme = initThemeState();
    applyThemeToDOM(theme);
    configureMermaid(theme);
}

/**
 * Toggles the theme between light and dark
 */
export function toggleTheme() {
    const currentTheme = getTheme();
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    saveTheme(nextTheme);
    applyThemeToDOM(nextTheme);
    configureMermaid(nextTheme);

    console.log('[ThemeController] Switched to', nextTheme);

    // If mermaid diagrams exist, reload to re-render them (simplest consistent way)
    const mermaidElements = document.querySelectorAll('.mermaid');
    if (mermaidElements.length > 0) {
        location.reload();
    }
}

/**
 * Applies theme classes and icons to the DOM
 * @param {string} theme 
 */
function applyThemeToDOM(theme) {
    document.body.className = theme === 'dark' ? 'theme-dark' : '';
    updateThemeIcon(theme);
}

/**
 * Updates the theme toggle icon
 * @param {string} theme 
 */
function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (!icon) return;

    if (theme === 'dark') {
        icon.innerHTML = `
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    `;
    } else {
        icon.innerHTML = `
      <circle cx="12" cy="12" r="5"></circle>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
    `;
    }
}
