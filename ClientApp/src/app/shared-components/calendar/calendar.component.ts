import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Months } from "./shared/classes/Months";

@Component({
    selector: 'ms-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    public activeYear: number;
    public activeMonth: number;
    public activeMonthShortName: string;

    constructor(private readonly  _translateService: TranslateService) {
        this._translateService.setDefaultLang('pl');
    }

    public ngOnInit() {
        let currentDate = new Date();
        this.activeYear = currentDate.getFullYear();
        this.activeMonth = currentDate.getMonth();
        this.activeMonthShortName = Months.getMonthShortName(this.activeMonth);
    }

    public setActiveYear(newActiveYear: number) {
        this.activeYear = newActiveYear;
    }

    public setActiveMonth(newActiveMonth: string) {
        this.activeMonth = Months.getMonthIndexFromShortName(newActiveMonth);
        this.activeMonthShortName = Months.getMonthShortName(this.activeMonth);
    }
}
