import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    private currentLanguageSubject = new BehaviorSubject<string>('pt');
    currentLanguage$ = this.currentLanguageSubject.asObservable();

    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('pt');
    }

    setLanguage(language: string) {
        this.translate.use(language);
        this.currentLanguageSubject.next(language);
    }

    getCurrentLanguage(): string {
        return this.currentLanguageSubject.value;
    }
}
