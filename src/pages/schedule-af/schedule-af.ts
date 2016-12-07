import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'page-schedule-af',
  templateUrl: 'schedule-af.html',
})
export class ScheduleAfPage {
    public schedule: FirebaseListObservable<any>;
    public likes;
    public afLikes: FirebaseObjectObservable<any>;

    constructor(af: AngularFire) {
        this.schedule = af.database.list('/schedule');
        const myUserID = '1233445'; // in real life this is based on auth ...
        this.afLikes = af.database.object('/users/' + myUserID, { preserveSnapshot: true });
        this.afLikes.subscribe(snapshot => {
                this.likes = snapshot.val();
            });
    }

    openEvent(event) {
        console.log('should open event (not yet implented):', event);
    }

    ionViewDidLoad() {
      console.log('Hello ScheduleAfPage Page');
    }

    like(event, newBool) {
        /*
         event.like = !event.like;
        let key = event.$key;
        // the event object contains some hidden methods
        // the need to be deleted before the object can be updated
        delete event.$key;
        delete event.$exists;
        this.schedule.update(key, event);
        */

        let likeUpdate = {};
        likeUpdate[event.sessionID] = !this.likes[event.sessionID];
        this.afLikes.update(likeUpdate);
    }

}
