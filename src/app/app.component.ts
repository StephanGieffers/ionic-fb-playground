import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs.page';
import * as firebase from 'firebase';

// This is not a secret! The information is known to whomever can run a debugger
/* tslint:disable */
export const firebaseConfig = {
    apiKey: "AIzaSyAiB9UInPT3SIz2Fe7OUfoe_Er9BJwNlhE",
    authDomain: "meetup-test.firebaseapp.com",
    databaseURL: "https://meetup-test.firebaseio.com",
    storageBucket: "meetup-test.appspot.com",
    messagingSenderId: "1089451320274",
};
/* tslint:enable */

@Component({
    template: `<ion-nav [root]="rootPage"></ion-nav>`,
})
export class MyApp {
    rootPage = TabsPage;

    constructor(platform: Platform) {
        firebase.initializeApp(firebaseConfig);
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
}
