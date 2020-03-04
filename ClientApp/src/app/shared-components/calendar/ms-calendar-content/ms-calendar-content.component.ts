import { Component, OnInit, Input } from '@angular/core';
import { Day } from '../shared/classes/Day';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'ms-calendar-content',
    templateUrl: './ms-calendar-content.component.html',
    styleUrls: ['./ms-calendar-content.component.scss']
})
export class MsCalendarContentComponent implements OnInit {

    @Input()
    set activeYear(activeYear: number) {
        this._activeYear = activeYear;
        this.getDaysInCurrentMonth();
    }
    get activeYear() { return this._activeYear }

    @Input()
    set activeMonth(activeMonth: number) {
        this._activeMonth = activeMonth;
        this.getDaysInCurrentMonth();
    }
    get activeMonth() { return this._activeMonth }

    private _daysInViewModel = 42;
    private _activeYear: number;
    private _activeMonth: number;

    public dayList: BehaviorSubject<Array<Day>> = new BehaviorSubject<Array<Day>>(null);

    constructor() { }

    public ngOnInit() {
        this.getDaysInCurrentMonth();
    }

    private getDaysInCurrentMonth() {

        let daysInMonth = new Array<Day>();

        const dayOfWeek = new Date(this._activeYear, this._activeMonth, 0).getDay();
        const numberOfDaysInMonth = new Date(this._activeYear, this._activeMonth + 1, 0).getDate();

        let addedDays = 0;

        // adding some undefined 'Day' objects before actual Days (to fit number of fields in calendar view)
        for (let day = 0; day < dayOfWeek; day++) {
            daysInMonth.push(Day.createEmpty());
            addedDays++;
        }

        for (let day = 1; day <= numberOfDaysInMonth; day++) {
            daysInMonth.push(Day.create(new Date(this._activeYear, this._activeMonth, day)));
            addedDays++;
        }

        // adding some undefined 'Day' objects after actual Days (to fit number of fields in calendar view)
        while (addedDays < this._daysInViewModel) {
            daysInMonth.push(Day.createEmpty());
            addedDays++;
        }

        this.dayList.next(daysInMonth);
    }
}
