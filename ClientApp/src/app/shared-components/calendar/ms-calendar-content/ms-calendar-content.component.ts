import { Component, OnInit } from '@angular/core';
import { Day } from '../shared/classes/Day';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'ms-calendar-content',
    templateUrl: './ms-calendar-content.component.html',
    styleUrls: ['./ms-calendar-content.component.scss']
})
export class MsCalendarContentComponent implements OnInit {

    private _daysInViewModel = 42;

    public dayList: BehaviorSubject<Array<Day>> = new BehaviorSubject<Array<Day>>(null);

    constructor() { }

    public ngOnInit() {
        this.getDaysInCurrentMonth();
    }

    private getDaysInCurrentMonth() {

        let daysInMonth = new Array<Day>();
        const nowDate = new Date();
        debugger 

        const month = nowDate.getMonth();
        const year = nowDate.getFullYear();
        const dayOfWeek = new Date(year, month, 0).getDay();

        const numberOfDaysInMonth = new Date(year, month +1, 0).getDate();

        let addedDays = 0;

        // adding some undefined 'Day' objects before actual Days (to fit number of fields in calendar view)
        for (let day = 0; day < dayOfWeek; day++) {
            daysInMonth.push(Day.empty());
            addedDays++;
        }

        for (let day = 1; day <= numberOfDaysInMonth; day++) {
            daysInMonth.push(Day.create(new Date(year, month, day)));
            addedDays++;
        }

        // adding some undefined 'Day' objects after actual Days (to fit number of fields in calendar view)
        while (addedDays < this._daysInViewModel) {
            daysInMonth.push(Day.empty());
            addedDays++;
        }

        this.dayList.next(daysInMonth);
    }

}
