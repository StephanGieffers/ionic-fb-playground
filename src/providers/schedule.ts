import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

@Injectable()
export class Schedule {
  private subject: Subject<any>;

  constructor(ngZone: NgZone) {
      console.log('Hello Schedule Provider');

      this.subject = new Subject();

      firebase.database().ref('v1/public/schedule').on('value',
          (snapshot) => {
              console.log('new data has arrived in provider');
              ngZone.run(() => {
                  this.subject.next(snapshot.val());
              });
          },
          err => { console.error (err); },
          this   // good practice -> avoids "that...."
      );
  }

  getObserver(): Subject<any> {
      return this.subject;
  }

}
