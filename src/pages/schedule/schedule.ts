import { Component , NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Schedule } from '../../providers/schedule';

// attempt 1: add firebase directly
// import * as firebase from 'firebase';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
    public schedule;

    constructor(ngZone: NgZone, schedule: Schedule) {
        // this needs to be valid JSON in case we want to cut&paste to Firebase!
        /* tslint:disable */
        const dummy =  [
            {
                "time": "8:00",
                "type" :"live",
                "session": "Early Bird Secrets",
                "speaker": "Peter"
            },
            {
                "time": "8:30",
                "type" :"",
                "session": "Welcome for everybody late...",
                "speaker": "Mary"
            },
            {
                "time": "9:00",
                "type" :"",
                "session": "Welcome for the guys too late ...",
                "speaker": "John"
            }

            ];
        /* tslint:enable */

        // this.schedule = dummy;

        schedule.getObserver().subscribe(
            data => {
                console.log('new data has arrived on page:', data);
                this.schedule = data;
            }
        );
        /*
        firebase.database().ref('schedule').on('value',
            (snapshot) => {
                let newData = snapshot.val();
                console.log('new data has arrived - you better update', newData);
                ngZone.run(()=>{
                    this.schedule = newData;
                })
            },
            err => { console.error (err); },
            this   // good practice -> avoids "that...."
        )
        */
    }

    openEvent(event) {
        console.log('should open event (not yet implented):', event);
    }

    ionViewDidLoad() {
      console.log('Hello SchedulePage Page');
    }

}
