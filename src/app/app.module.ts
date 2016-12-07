import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about.page';
import { ContactPage } from '../pages/contact/contact.page';
import { HomePage } from '../pages/home/home.page';
import { TabsPage } from '../pages/tabs/tabs.page';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleAfPage } from '../pages/schedule-af/schedule-af';

import { Schedule } from '../providers/schedule';

import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = {
    apiKey: 'AIzaSyASgp214J9VsQNEpcXX9fRpD0HGk0tiOPg',
    authDomain: 'ionic-fb-playground.firebaseapp.com',
    databaseURL: 'https://ionic-fb-playground.firebaseio.com',
    storageBucket: 'ionic-fb-playground.appspot.com',
    messagingSenderId: '608035479083',
};

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        SchedulePage,
        ScheduleAfPage,
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
    ],
    providers: [
        Schedule,
    ],
})
export class AppModule {}
