import { Component, OnInit } from '@angular/core';
import { Day } from "../shared/classes/Day";
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'ms-calendar-content',
    templateUrl: './ms-calendar-content.component.html',
    styleUrls: ['./ms-calendar-content.component.scss']
})
export class MsCalendarContentComponent implements OnInit {

    public dayList: BehaviorSubject<Day> = new BehaviorSubject<Day>(null);

    constructor() { }

    public ngOnInit() {
        let array = [new Day, new Day, new Day, new Day, new Day, new Day];
        this.dayList.next(array);
    }

}
