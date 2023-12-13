import { LanguageService } from './../../services/language-translation.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-language-selector',
    templateUrl: './language-selector.component.html',
    styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
    @Output() languageSelected = new EventEmitter<string>();
    selectedLanguage: string;

    constructor(private LanguageService: LanguageService) {
        this.selectedLanguage = LanguageService.getCurrentLanguage();
    }

    switchLanguage(language: string) {
        this.LanguageService.setLanguage(language);
        this.selectedLanguage = language;
        this.languageSelected.emit(language);
    }

    isLanguageSelected(language: string): boolean {
        return this.selectedLanguage === language;
    }
}
