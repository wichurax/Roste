import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "./calendar/calendar.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MsCalendarHeaderComponent } from './calendar/ms-calendar-header/ms-calendar-header.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MsCalendarContentComponent } from './calendar/ms-calendar-content/ms-calendar-content.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    declarations: [
        CalendarComponent,
        MsCalendarHeaderComponent,
        MsCalendarContentComponent
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
