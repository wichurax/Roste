import { Component, OnInit } from '@angular/core';
import { Day } from "../../shared/classes/Day";
import { Input } from "@angular/core";

@Component({
    selector: 'ms-day',
    templateUrl: './ms-day.component.html',
    styleUrls: ['./ms-day.component.scss']
})
export class MsDayComponent implements OnInit {
    @Input() day: Day;

    constructor() { }

    public ngOnInit() {
    }

}
