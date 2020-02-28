import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "./calendar/calendar.component";
import { MsCalendarHeaderComponent } from './calendar/ms-calendar-header/ms-calendar-header.component';
import { MsCalendarContentComponent } from './calendar/ms-calendar-content/ms-calendar-content.component';
import { MsDayComponent } from './calendar/ms-calendar-content/ms-day/ms-day.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        CalendarComponent,
        MsCalendarHeaderComponent,
        MsCalendarContentComponent,
        MsDayComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule
    ],
    exports: [
        CalendarComponent
    ]
})
export class SharedComponentsModule { }
