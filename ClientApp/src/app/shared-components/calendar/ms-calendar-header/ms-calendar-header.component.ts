import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ms-calendar-header',
    templateUrl: './ms-calendar-header.component.html',
    styleUrls: ['./ms-calendar-header.component.scss']
})
export class MsCalendarHeaderComponent implements OnInit {

    @Input() year: number;
    @Input() month: string;

    public years: Array<number> = [];

    constructor() { }

    public ngOnInit() {
        for (var i = 0; i < 16; i++) {
            this.years[i] = (this.year - 8 + i);
        }
    }

    public setYear(year: number) {
        this.year = year;
    }
}
