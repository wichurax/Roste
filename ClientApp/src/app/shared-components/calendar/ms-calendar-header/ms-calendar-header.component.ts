import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ms-calendar-header',
    templateUrl: './ms-calendar-header.component.html',
    styleUrls: ['./ms-calendar-header.component.scss']
})
export class MsCalendarHeaderComponent implements OnInit {

    @Input() year: number;
    @Input() month: string;

    private _quantityOfYearsInGrid = 20;
    public quantityOfColsInMatMenuGrid = 4;

    public years: Array<number> = [];

    constructor() { }

    public ngOnInit() {
        this.refreshYears();
    }

    public setYear(year: number) {
        this.year = year;
        this.refreshYears();
    }

    private refreshYears() {
        for (var i = 0; i < this._quantityOfYearsInGrid; i++) {
            this.years[i] = (this.year - this.quantityOfColsInMatMenuGrid + i);
        }
    }
}
