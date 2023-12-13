import { Component, OnInit } from '@angular/core';
import { LanguageService } from './services/language-translation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    constructor(private languageService: LanguageService) {}

    ngOnInit() {
        this.languageService.setLanguage('pt');
    }

    switchLanguage(language: string) {
        this.languageService.setLanguage(language);
    }

    title = 'allisonDev-portfolio';
}
