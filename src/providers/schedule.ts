import { Injectable, NgZone } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as firebase from 'firebase';

@Injectable()
export class Schedule {
  public data: ReplaySubject<any>;

  constructor(ngZone: NgZone) {
      console.log('Hello Schedule Provider');

      // Here you find more information about ReplaySubject:
      // https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/replaysubject.md
      // A subject allows to have multiple subscribers - this great you do not need to manage mutiple
      // subscribers yourself...
      // A ReplaySubject does previous updates - this makes sure there data for a "late" subscriber...
      this.data = new ReplaySubject(1 /* buffer size */);

      firebase.database().ref('v1/public/schedule').on('value',
          (snapshot) => {
              console.log('new data has arrived in provider');
              ngZone.run(() => {
                  this.data.next(snapshot.val());
              });
          },
          err => { console.error (err); },
      );
  }
}
