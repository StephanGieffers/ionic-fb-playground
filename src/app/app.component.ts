import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs.page';
import * as firebase from 'firebase';

// This is not a secret! The information is known to whomever can run a debugger
export const firebaseConfig = {
    apiKey: 'AIzaSyASgp214J9VsQNEpcXX9fRpD0HGk0tiOPg',
    authDomain: 'ionic-fb-playground.firebaseapp.com',
    databaseURL: 'https://ionic-fb-playground.firebaseio.com',
    storageBucket: 'ionic-fb-playground.appspot.com',
    messagingSenderId: '608035479083',
};

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
