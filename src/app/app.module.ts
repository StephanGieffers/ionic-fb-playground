import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about.page';
import { ContactPage } from '../pages/contact/contact.page';
import { HomePage } from '../pages/home/home.page';
import { TabsPage } from '../pages/tabs/tabs.page';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleAfPage } from '../pages/schedule-af/schedule-af';
import { FileDemoPage } from '../pages/file-demo/file-demo';

import { Schedule } from '../providers/schedule';

import { AngularFireModule } from 'angularfire2';
/* tslint:disable */
export const firebaseConfig = {
    apiKey: "AIzaSyC02tUYxK5jBip0-2vwiKvBEd2p3Tss0SM",
    authDomain: "meetup-live-a767b.firebaseapp.com",
    databaseURL: "https://meetup-live-a767b.firebaseio.com",
    storageBucket: "meetup-live-a767b.appspot.com",
    messagingSenderId: "776909017389"
};
/* tslint:enable */

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        SchedulePage,
        ScheduleAfPage,
        FileDemoPage,
    ],
    imports: [
       IonicModule.forRoot(MyApp),
       AngularFireModule.initializeApp(firebaseConfig),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        SchedulePage,
        ScheduleAfPage,
        FileDemoPage,
    ],
    providers: [
        Schedule,
    ],
})
export class AppModule {}
