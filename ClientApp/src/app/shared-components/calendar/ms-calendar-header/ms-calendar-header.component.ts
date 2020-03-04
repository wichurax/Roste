import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Months } from "../shared/classes/Months";

@Component({
    selector: 'ms-calendar-header',
    templateUrl: './ms-calendar-header.component.html',
    styleUrls: ['./ms-calendar-header.component.scss']
})
export class MsCalendarHeaderComponent implements OnInit {

    @Input() activeYear: number;
    @Input()
    set activeMonth(activeMonth: number) {
        if (activeMonth === -1) {
            activeMonth = 11;
            this.decrementYear();
        }
        if (activeMonth === 12) {
            activeMonth = 0;
            this.incrementYear();
        }
        this._activeMonth = activeMonth;
        this.activeMonthShortName = Months.getMonthShortName(this._activeMonth);
    }
    get activeMonth() { return this._activeMonth}

    @Output() onNewYearChosen: EventEmitter<number> = new EventEmitter<number>();
    @Output() onNewMonthChosen: EventEmitter<number> = new EventEmitter<number>();

    private _activeMonth: number;
    private _quantityOfYearsInGrid = 20;
    private _quantityOfMonthsInYear = 12;

    public setYearMenuViewActive = true;

    public quantityOfColsInMatMenuGrid = 4;
    public yearsShift = 0;
    public activeMonthShortName: string;

    public years: Array<number> = [];
    public months: Array<[string, number]> = [];

    constructor() { }

    public ngOnInit() {
        this.loadInitialDataForMenu();
    }

    public setYear(year: number, event: any) {
        this.activeYear = year;
        this.refreshYears();
        event.stopPropagation();
        this.setYearMenuViewActive = false;
        this.onNewYearChosen.emit(this.activeYear);
    }

    public setMonth(month: number) {
        this.activeMonth = month;
        setTimeout(() => {
            this.setYearMenuViewActive = true;
            this.onNewMonthChosen.emit(this.activeMonth);
        }, 300);
    }

    public loadMonths() {
        for (let i = 0; i < this._quantityOfMonthsInYear; i++) {
            this.months[i] = [Months.getMonthShortName(i), i];
        }
    }

    private refreshYears() {
        for (let i = 0; i < this._quantityOfYearsInGrid; i++) {
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

    public incrementYear(event?: any) {
        this.activeYear++;
        if (event)
            event.stopPropagation();
    }

    public decrementYear(event?: any) {
        this.activeYear--;
        if (event)
            event.stopPropagation();
    }

    public incrementMonth() {
        this.activeMonth++;
        this.onNewMonthChosen.emit(this.activeMonth);
    }

    public decrementMonth() {
        this.activeMonth--;
        this.onNewMonthChosen.emit(this.activeMonth);
    }

    public loadInitialDataForMenu() {
        setTimeout(() => {
            this.setYearMenuViewActive = true;
            this.yearsShift = 0;
            this.refreshYears();
            this.loadMonths();
        }, 200);
    }
}
