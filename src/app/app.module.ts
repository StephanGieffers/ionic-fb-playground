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
    apiKey: "AIzaSyAiB9UInPT3SIz2Fe7OUfoe_Er9BJwNlhE",
    authDomain: "meetup-test.firebaseapp.com",
    databaseURL: "https://meetup-test.firebaseio.com",
    storageBucket: "meetup-test.appspot.com",
    messagingSenderId: "1089451320274",
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
