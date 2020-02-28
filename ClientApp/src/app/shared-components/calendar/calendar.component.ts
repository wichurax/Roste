import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    constructor(private readonly  _translateService: TranslateService) {
        this._translateService.setDefaultLang('pl');
    }

    public ngOnInit() {
    }
}
