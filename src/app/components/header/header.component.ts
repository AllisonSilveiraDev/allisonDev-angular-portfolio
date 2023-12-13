import { Component } from '@angular/core';
import { LanguageService } from '../../services/language-translation.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    constructor(private languageService: LanguageService) {}

    switchLanguage(language: string) {
        this.languageService.setLanguage(language);
    }
}
