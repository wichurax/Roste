import { Injectable } from '@angular/core';
import { Month } from "./Month";

@Injectable({
    providedIn: 'root'
})
export class TranslateService {

    private _language: string;

    constructor(language: string) {
        this._language = language;
    }

    translate(month: Month): string {
        return this.fromLanguage(this._language, month);
    }

    fromLanguage(language: string, month: Month): string {
        switch (month.name) {
            case 'january':
                // TODO zamienić zwracanie konkretnego stringa na string ze względu na ustawiony język
                return 'January';
            case 'february':
                return 'February';
            case 'march':
                return 'March';
            case 'april':
                return 'April';
            case 'may':
                return 'May';
            case 'june':
                return 'June';
            case 'july':
                return 'July';
            case 'august':
                return 'August';
            case 'september':
                return 'September';
            case 'october':
                return 'October';
            case 'november':
                return 'November';
            case 'december':
                return 'December';
        }
        throw new Error('Translation given month failed');
    }
}
