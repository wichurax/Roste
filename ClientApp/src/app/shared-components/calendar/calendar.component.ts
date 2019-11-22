import { Component, OnInit } from '@angular/core';
import { TranslateService } from "./translate.service";

@Component({
    selector: 'ms-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    public translateService: TranslateService;

    constructor() {
        this.translateService = new TranslateService('pl');
    }

    ngOnInit() {
    }
}
