import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    public activeYear: number;
    public activeMonth: number;

    constructor(private readonly  _translateService: TranslateService) {
        this._translateService.setDefaultLang('pl');
    }

    public ngOnInit() {
        let currentDate = new Date();
        this.activeYear = currentDate.getFullYear();
        this.activeMonth = currentDate.getMonth();
    }

    public setActiveYear(newActiveYear: number) {
        this.activeYear = newActiveYear;
    }

    public setActiveMonth(newActiveMonth: number) {
        this.activeMonth = newActiveMonth;
    }
}
