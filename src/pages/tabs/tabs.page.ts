import { Component } from '@angular/core';

import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { SchedulePage } from '../schedule/schedule';
import { ScheduleAfPage } from '../schedule-af/schedule-af';

@Component({
  templateUrl: 'tabs.page.html',
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
    tabSchedule: any = SchedulePage;
    tabProSchedule: any = ScheduleAfPage;
    tab1Root: any = HomePage;
    tab3Root: any = ContactPage;

  constructor() {

  }
}
