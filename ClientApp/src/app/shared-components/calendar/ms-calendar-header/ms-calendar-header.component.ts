import { Component, OnInit, Inject } from '@angular/core';
import { CalendarComponent } from "../calendar.component";
import { TranslateService } from "../translate.service";

@Component({
    selector: 'ms-calendar-header',
    templateUrl: './ms-calendar-header.component.html',
    styleUrls: ['./ms-calendar-header.component.scss']
})
export class MsCalendarHeaderComponent implements OnInit {
    constructor(@Inject(CalendarComponent) private _parent: CalendarComponent) { }

    private readonly _contex = 'request';
    ngOnInit() {
        console.log(this._parent.translateService.valueOf());
        document.getElementById('status').style.color = this.getStatusColor('done', 'request');
    }

    private getStatusColor(statusType: string, context: string): string {
        switch (statusType) {
            case 'done':
                if (context === 'request') return 'red';
                else return 'blue';
            default:
        }
        return 'yellow';
    }
}
