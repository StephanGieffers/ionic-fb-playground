import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  selector: 'page-file-demo',
  templateUrl: 'file-demo.html',
})
export class FileDemoPage {
  progress = 0;
  downloadUrl = '';

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FileDemoPage Page');
  }

  uploadDemo() {
      this.progress = 0;

      // adapted straight from the doc example:
      // https://firebase.google.com/docs/storage/web/upload-files

      // Create a root reference
      let storageRef = firebase.storage().ref();

      // Create a reference for my new file
      let myFileRef = storageRef.child('test/ionicMeetup.txt');

      // add the actual file (using some text for demo purposes)
      // usually you will use put(file) to upload a file
      let uploadTask = myFileRef.putString('Ionic Meetup is awesome');

      /*  you could use this promise, but we are going to monitor the progress instead...
       .then(function(snapshot) {
       console.log('Uploaded a raw string!');
       });
       */
      uploadTask.on('state_changed', snapshot => {
          this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + this.progress + '% done');
          /* tslint:disable:switch-default */
          switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                  console.log('Upload is paused');
                  break;
              case firebase.storage.TaskState.RUNNING: // or 'running'
                  console.log('Upload is running');
                  break;
           /* tslint:enable:switch-default */
          }
      }, error => {
          // Handle unsuccessful uploads
          console.error(error);
      }, () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          let downloadURL = uploadTask.snapshot.downloadURL;
          console.log('successfully uploaded file - url: ' + downloadURL);
      });
  }

  downloadDemo() {
      // adapted straight from the doc example:
      // https://firebase.google.com/docs/storage/web/download-files
      firebase.storage().ref().child('test/ionicMeetup.txt').getDownloadURL()
          .then(url => {
            this.downloadUrl = url;
      }).catch(function(error) {
          // Handle any errors
      });
  }

}
