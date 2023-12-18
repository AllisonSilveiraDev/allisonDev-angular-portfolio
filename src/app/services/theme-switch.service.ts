import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private currentThemeKey = 'current-theme';
    private availableThemes = ['light', 'dark'];

    constructor() {
        const savedTheme = localStorage.getItem(this.currentThemeKey);
        if (savedTheme && this.availableThemes.includes(savedTheme)) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            const defaultTheme = this.availableThemes[0];
            localStorage.setItem(this.currentThemeKey, defaultTheme);
            document.documentElement.setAttribute('data-theme', defaultTheme);
        }
    }

    getCurrentTheme(): string {
        return (
            localStorage.getItem(this.currentThemeKey) ||
            this.availableThemes[0]
        );
    }

    setTheme(theme: string): void {
        if (this.availableThemes.includes(theme)) {
            localStorage.setItem(this.currentThemeKey, theme);
            document.documentElement.setAttribute('data-theme', theme);
        }
    }
}
