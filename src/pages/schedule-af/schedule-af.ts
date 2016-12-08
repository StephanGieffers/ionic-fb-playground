import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'page-schedule-af',
  templateUrl: 'schedule-af.html',
})
export class ScheduleAfPage {
    public schedule: FirebaseListObservable<any>;
    public likes = {};
    public afLikes: FirebaseObjectObservable<any>;

    constructor(af: AngularFire) {
        this.schedule = af.database.list('v1/public/schedule');

        const myUserID = '1234-dummyuser'; // in real life this is based on auth ...
        this.afLikes = af.database.object('v1/users/' + myUserID, { preserveSnapshot: true });
        this.afLikes.subscribe(snapshot => {
                let value = snapshot.val();
                this.likes = (!value) ? {} : snapshot.val();
            });
    }

    openEvent(event) {
        console.log('should open event (not yet implemented):', event);
    }

    ionViewDidLoad() {
      console.log('Hello ScheduleAfPage Page');
    }

    like(slot) {
        slot.like = !slot.like;

        /*
        let key = slot.$key;
        // the event object contains some hidden methods
        // the need to be deleted before the object can be updated

        delete slot.$key;
        delete slot.$exists;
        this.schedule.update(key, slot);
        */

        /*
         let likeUpdate = {};
         likeUpdate[slot.sessionID] = !this.likes[slot.sessionID];
         this.afLikes.update(likeUpdate);
        */
    }

}
