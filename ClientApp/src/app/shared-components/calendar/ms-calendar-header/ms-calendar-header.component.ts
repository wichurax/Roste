import { Component, OnInit, Input } from '@angular/core';

const monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

@Component({
    selector: 'ms-calendar-header',
    templateUrl: './ms-calendar-header.component.html',
    styleUrls: ['./ms-calendar-header.component.scss']
})
export class MsCalendarHeaderComponent implements OnInit {

    @Input() activeYear: number;
    @Input() activeMonth: string;

    private _quantityOfYearsInGrid = 20;
    private _quantityOfMonthsInYear = 12;
    public quantityOfColsInMatMenuGrid = 4;
    public yearsShift = 0;

    public years: Array<number> = [];
    public months: Array<string> = [];

    public setYearMenuViewActive = true;

    constructor() { }

    public ngOnInit() {
        this.loadInitialDataForMenu();
    }

    public setYear(year: number, event: any) {
        this.activeYear = year;
        this.refreshYears();
        event.stopPropagation();
        this.setYearMenuViewActive = false;
    }

    public setMonth(month: string) {
        this.activeMonth = month;
        setTimeout(() => this.setYearMenuViewActive = true, 300);
    }

    public loadMonths() {
        for (let i = 0; i < this._quantityOfMonthsInYear; i++) {
            this.months[i] = monthShortNames[i];
        }
    }

    private refreshYears() {
        for (var i = 0; i < this._quantityOfYearsInGrid; i++) {
            this.years[i] = (this.activeYear - this.quantityOfColsInMatMenuGrid + (this._quantityOfYearsInGrid * this.yearsShift) + i);
        }
    }

    public decrementYearsShift(event: any) {
        event.stopPropagation();
        this.yearsShift--;
        this.refreshYears();
    }

    public incrementYearsShift(event: any) {
        event.stopPropagation();
        this.yearsShift++;
        this.refreshYears();
    }

    public incrementYear(event: any) {
        this.activeYear++;
        event.stopPropagation();
    }

    public decrementYear(event: any) {
        this.activeYear--;
        event.stopPropagation();
    }

    public loadInitialDataForMenu() {
        setTimeout(() => {
            this.setYearMenuViewActive = true;
            this.yearsShift = 0;
            this.refreshYears();
            this.loadMonths();
        }, 300);
    }
}
