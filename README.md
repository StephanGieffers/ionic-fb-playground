# IONIC-firebase playground
This is a sample project created for the Berlin IONIC Meetup on December 9th, 2016, to demo the integration between with IONIC 2 and Firebase
 in regards to (Realtime) Database and Storage.

You can have a look at the presentation if you are bothered. They are in the ["materials"](https://github.com/StephanGieffers/ionic-fb-playground/tree/master/materials) folder of this repo.

## Installation
### Part 1 - Git
If you really want to install this locally you need to follow these steps. Because I am using a boilerplate template (see below) 
there is more stuff to download than is actually required (sorry for that...).

```bash
# Required dependecies (on Mac Os also install ios-sim and ios-deploy)
npm i -g cordova ionic yarn
gem install scss_lint

// TODO: add information on how to clone this project

# Clone the repo --depth 1 removes all but one .git commit history
git clone https://github.com/StephanGieffers/ionic-fb-playground.git

# Change directory
cd ionic-fb-playground

# Install project dependencies
yarn
npm run post-install

# Launch ionic serve
npm run dev
```

### Installation - Part 2 - Firebase
[Please create your on Firebase Project](https://firebase.google.com/). In only takes a couple of minutes. 
The firebase project referenced in the code is set to be
read only - so any features with updates will not work...

## Code/ Demo walkthrough
### Setting up standard firebase
In you firebase project console click on the "Add Firebase to your web app" link and copy the config variable values.
Then paste them into src/apps/app.components.

To setup Firebase for Ionic, all you need to do is to npm-install [firebase](https://www.npmjs.com/package/firebase)  (should have happened already)
, import it to your components and then run the initialzeApp method when bootstrapping.
It's easy - you will figure it out when looking at the code. 

### Setting up AngularFire
The code also uses AngularFire. To install Angular fire, have a look into the src/app/app.module. There you find what
is necessary (make sure to update the config vars!!!).

Please note, that you may not required to explicitly setup firebase when you are using AngularFire. In the demo I presented both
approaches.

### Step 1: Basic scenario using dummy data
The idea is, that we want to create a time schedule for a conference. So we create some html code based on some dummy
data in our page object to play with and figure out the basic html/css code.

All of this can be found in src/pages/schedule.
Make sure to fire up ionic serve (you can use `npm run dev` as well...).


### Step 2: Moving data into firebase
Copy and paste the array with you dummy data, got your firebase console/ data and create a variable with the name:
`v1/public/schedule` and paste the dumm data in as the value. As a result you should see tree with your dummy data.

If you disable the code and enable the getFirebaseData method, wait for your UI to update, you should see ....

... an error message in your console.

The reason is, that your firebase database only allows authorized access by default. So go to your Firebase Console/Database
 (on the Firebase Website), open the Rules tab and set the rules as follows:
```bash
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
Never do this in real life, because everybody - even I  - can write data into your database....

If you now refresh your webpage, you should see the data. But it is showing up delayed, or maybe even only after you
click on other tabs. The reason is that angular is not catching the firebase updates and doesn't refresh the page ... 
What you need to do is run the update in ngZone. You will see the details in the code. Once you enable that 
respective code, you will have immediate updates. When you change a value in the console you can immediately see the 
updates on you web page.

### Step 3 Moving the code into a provider
Of course you should not run you firebase code in the page object, but rather use a provider. The code is included in
page and in src/providers/schedule.

### Step 4 Add more sample data (optional) 
If you want additional sample data, you will find an Excel file in the folder "materials". If you have Excel, you can open it,
copy the values and paste them [here in the csv section](http://www.convertcsv.com/csv-to-json.htm). Using the site you
can convert it to json and overwrite the schedule variable in your firebase console.

This is not required, but just a showcase how can get your customer's data into Firebase in quick and dirty fashion... 

### Step 5 Doing the same with AngularFire
If you look at the `src/pages/schedule-af` you will see how the same can be done with AngularFire (in the WebUI this is
the second tab).

### Step 6 Adding a like feature
The code also implements a "like" feature. Check out the html and page code to figure out how it works.
To use AngularFire to persist changes follow the the code and uncomment step by step...
There is a simple implementation that just updates the session schedule. In addition there is a proper solution
that is storing the updates on a per user basis.


### Storage Demo
The storage demo code is on the page `src/pages/file-demo`. It's very plain and straightforward.

For this code to work you need to relax your firebase storage rules as follows:

``` bash
service firebase.storage {
  match /b/meetup-live-a767b.appspot.com/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

**Please!!!!: protect your storage after playing - you don't want your storage to be used for a video exchange circle...** 

 
## Credits
### Build on IONIC 2 Boilerplate
 This app is based on the outrageous [IONIC 2 Boilerplate Template from Marco Turi](https://github.com/marcoturi/ionic2-boilerplate)
 
 It is a little oversized for this demo, but I am so used to it that I really don't want to miss it...
 
 You should really checkout Marcos page to find out about running karma, protractor, .....
 
 
## <a name="license"></a>License
    Copyright (c) 2016 Stephan Gieffers 
    Source code is open source and released under the MIT license.
