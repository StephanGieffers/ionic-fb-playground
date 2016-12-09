# IONIC-firebase playground
This is sample project created for the Berlin IONIC Meetup to demo the integration between with IONIC 2 and Firebase, 
especially (Realtime) Database and Storage.

You can have a look at the presentation if you are bothered. They are in the "materials" folder of this repo.

## Installation
### Part 1 - Git
If you really want to install this locally you need to follow these steps. Because I am use a boilertemplate (see below) 
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
In you firebase project console click on the "Add Firebase to your web app" link and copy the conig variable values.
Then paste it into src/apps/app.components.

To setup firebase for Ionic all you need to do is to npm install it (should have happened already), import it to your
components and then run the initialzeApp method with your configuration.
It's easy - you will figure it out when looking at the code-

### Setting up AngularFire
The code also uses AngularFire. To install Angular fire, have a look into the src/app/app.module. There you find what
is necessary (make sure to update the config vars!!!).

Please note, that you may not required the firebase setup when you are using AngularFire. In the demo I presented both
approaches.

### Step 1: Basic scenario using dummy data
The idea is, that we want to create a time schedule for a conference. So we create some html code, create sommy dummy
data in our page object to play with and figure out the basic html/css code.

All of this can be found in src/pages/schedule.
Make sure to fire up ionic serve (you can use `npm run dev` as well...).


### Step 2: Moving data into firebase
Copy and paste the array with you dummy data, got your firebase console/ data and create a variable with the name:
v1/public/schedule and paste the dumm data in as the value. As a result you should see tree with your dummy data.

If you disalbe the code and enable the getFirebaseData method, wait for your ui to update, you should see ....

... an error message in your console.

The reason is, that your firebase database only allows authorized access by default. So go to your firebase console/Database,
open the Rules tab and se the rules as follows:
```bash
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
Never do this in real life - because everybody - even I  - can write data into your database....

If you now refresh your webpage, you should see the data. But it is showing up delayed, or maybe even only after you
click on other tabs. The reason is that angular is not catching the firebase updates... What you need to do is run the
update in ngZone. You will the details in the code. Once you enable that you will have immediate updates. When you 
cchange a value in the console you can immediately see the updates on you web page.

### Step 3 Moving the code into a provider
Of course you should not run you firebase code in the page object, but rather use a provider. The code is included in
page and in src/providers/schedule.

### Step 4 (optional) Add more sample data
If you want additional sample data, you will find an Excel file in the "materials". If you have Excel, you can open it,
copy the values and paste them [here in the csv section](http://www.convertcsv.com/csv-to-json.htm). Using the site you
can convert it to json and overwrite the schedule variable in your firebase console.

This is not required, but just a showcase how can get your customer's data into firebase in quick and dirty fashion... 

### Step 5 Doing the same with AngularFire
If you look at the src/pages/schedule-af you will see how the same can be done with AngularFire (in the WebUI this is
the second tab).

### Step 6 Adding a like feature
The code also features a "like" feature. Check out the html and page code to figure out how it works.
There is a simple implementation that just updates the session schedule. In addition there is a proper solution
that is storing the updates on a per user basis.


### Storage Demo
The storage demo code is in the page src/pages/file-demo. It's very plain and straightforward.

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

**Please!!!!: protect your storage after playing - you don't want your storage to be used by some gangsters...** 



 
## Credits
### Build on IONIC 2 Boilerplate
 This app is build based on the outrageous []IONIC 2 Boilerplate Template from Marco Turi](https://github.com/marcoturi/ionic2-boilerplate)
 
 It is a little oversized for this demo, but I am so used to it that I really don't want to miss it...
 
 You should really checkout Marcos page to find about how to run karma, protractor, .....
 
 
## <a name="license"></a>License
    Copyright (c) 2016 Stephan Gieffers 
    Source code is open source and released under the MIT license.
