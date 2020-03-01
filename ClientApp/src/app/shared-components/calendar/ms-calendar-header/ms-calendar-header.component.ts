import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ms-calendar-header',
    templateUrl: './ms-calendar-header.component.html',
    styleUrls: ['./ms-calendar-header.component.scss']
})
export class MsCalendarHeaderComponent implements OnInit {

    @Input() activeYear: number;
    @Input() month: string;

    private _quantityOfYearsInGrid = 20;
    public quantityOfColsInMatMenuGrid = 4;
    public yearsShift = 0;

    public years: Array<number> = [];

    constructor() { }

    public ngOnInit() {
        this.refreshYears();
    }

    public setYear(year: number) {
        this.activeYear = year;
        this.refreshYears();
    }

    private refreshYears() {
        for (var i = 0; i < this._quantityOfYearsInGrid; i++) {
            this.years[i] = (this.activeYear - this.quantityOfColsInMatMenuGrid - (this._quantityOfYearsInGrid * this.yearsShift) + i);
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
}
