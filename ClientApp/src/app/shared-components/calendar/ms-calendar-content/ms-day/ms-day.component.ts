import { Component, OnInit } from '@angular/core';
import { Day } from '../../shared/classes/Day';
import { Input } from '@angular/core';

@Component({
    selector: 'ms-day',
    templateUrl: './ms-day.component.html',
    styleUrls: ['./ms-day.component.scss']
})
export class MsDayComponent implements OnInit {
    @Input() public day: Day;

    constructor() { }

    public ngOnInit() {

    }

    public printDay() {
        if (this.day.value !== undefined) 
            console.log('Clicked day is: ' + this.day.value.getDate());
    }
}
