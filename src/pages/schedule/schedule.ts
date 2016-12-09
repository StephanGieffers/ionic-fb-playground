import { Component , NgZone } from '@angular/core';
import { Schedule } from '../../providers/schedule';

import * as firebase from 'firebase';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
    public schedule;

    constructor( private ngZone: NgZone, scheduleProvider: Schedule) {
        // Variation 1: user local dummy data
        // this needs to be valid JSON in case we want to cut&paste to Firebase!
        /* tslint:disable */
        // Variation 1: use local dummy data to get started
        const dummy =  [
            {
                "sessionID": "1",
                "time": "8:00",
                "type" :"live",
                "session": "Early Bird Secrets",
                "speaker": "Peter"
            },
            {
                "sessionID": "2",
                "time": "8:30",
                "type" :"",
                "session": "Welcome for everybody late...",
                "speaker": "Mary"
            },
            {
                "sessionID": "3",
                "time": "9:00",
                "type" :"",
                "session": "Welcome for the guys too late ...",
                "speaker": "John"
            }

        ];
        /* tslint:enable */
        this.schedule = dummy;

        // Variation 2: put your data into firebase and subscribe to updates
        // in your firebase instance create a variable witht the path: v1/public/schedule
        // and copy&paste the array with dummy data from above
        // this.getDataFromFirebaseDirectly();

        /* Variation 3: use provider (recommended ;-)
        scheduleProvider.data.subscribe(
             data => {
                 console.log('new data has arrived on page:', data);
                 this.schedule = data;
             }
        );
        */
    }

    getDataFromFirebaseDirectly() {
        firebase.database().ref('v1/public/schedule').on('value',
            (snapshot) => {
                let newData = snapshot.val();
                console.log('new data has arrived - you better update', newData);
                this.schedule = newData;
                // unfortunatley this does not work as expected!
                // as firebase is running in a seperate process it does not catch this change
                // and refresh immediately

                /* instead you need to run this update in ngZone so the UI updates immediately
                this.ngZone.run(() => {
                   this.schedule = newData;
                });
                */
            },
            err => { console.error (err); }
        );
    }

    openEvent(slot) {
        console.log('should open event (not yet implemented):', slot);
    }

    ionViewDidLoad() {
      console.log('Hello SchedulePage Page');
    }

}
