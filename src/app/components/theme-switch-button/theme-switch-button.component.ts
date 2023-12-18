import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme-switch.service';

@Component({
    selector: 'app-theme-switch-button',
    templateUrl: './theme-switch-button.component.html',
    styleUrl: './theme-switch-button.component.scss',
})
export class ThemeSwitchComponent implements OnInit {
    constructor(private themeService: ThemeService) {}

    ngOnInit(): void {}

    toggleTheme(): void {
        const currentTheme = this.themeService.getCurrentTheme();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.themeService.setTheme(newTheme);
    }

    isDarkTheme(): boolean {
        return this.themeService.getCurrentTheme() === 'dark';
    }
}
