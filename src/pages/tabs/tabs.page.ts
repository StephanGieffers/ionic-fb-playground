import { Component } from '@angular/core';

import { SchedulePage } from '../schedule/schedule';
import { ScheduleAfPage } from '../schedule-af/schedule-af';
import { FileDemoPage } from '../file-demo/file-demo';

@Component({
  templateUrl: 'tabs.page.html',
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
    tabSchedule: any = SchedulePage;
    tabProSchedule: any = ScheduleAfPage;
    tabFileDemo: any = FileDemoPage;

  constructor() {

  }
}
