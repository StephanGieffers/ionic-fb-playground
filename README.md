# IONIC-firebase playground
This is sample project created for the Berlin IONIC Meetup to present some integration challanges with IONIC 2 and Firebase, 
especially (Realtime) Database and Storage.

 
## <a name="installation"></a>Installation & Configuration
### Build on IONIC 2 Boilerplate
 This app is build based on the outrageous []IONIC 2 Boilerplate Template from Marco Turi](https://github.com/marcoturi/ionic2-boilerplate)
 
 Most of the content in the section is based on Marcos original Readme.
### <a name="quick-start"></a>Quick Start/ Dependencies
```bash
# Required dependecies (on Mac Os also install ios-sim and ios-deploy)
npm i -g cordova ionic yarn
gem install scss_lint

// TODO: add information on how to clone this project

# Clone the repo --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/marcoturi/ionic2-boilerplate.git

# Change directory
cd ionic2-boilerplate

# Install project dependencies
yarn
npm run post-install

# Launch ionic serve
npm run dev
```
**TO RUN IONIC: Make sure you have Node version >= 6.X and NPM >= 3** <br>
**TO RUN SCSS-LINT: Make sure you have Ruby >= 2** <br>
**TO RUN PROTRACTOR/E2E TESTS: Make sure you have Python = 2.X**

### <a name="npm-scripts"></a>NPM scripts commands
| Task              | Description                                            |
|-------------------|--------------------------------------------------------|
| `dev`             | Run ionic serve                                        |
| `build`           | Full production build. Use `--dev` flag for dev build. |
| `release`         | Generate changelog based on commits                    |
| `push`            | Shortcut for git push origin master --follow-tags      |
| `lint`            | Lint with tslint                                       |
| `scss-lint`       | Lint scss                                              |
| `test`            | Runs Karma test                                        |
| `test:watch`      | Runs Karma test watching for edits (TDD style)         |
| `e2e`             | Runs e2e protractor tests                              |
| `e2e:interactive` | Runs e2e protractor tests in interactive mode          |
| `docs`            | Generate code documentation through Typedoc            |
| `outdated`        | Search npm packages for outdated dependencies          |
| `post-install`    | Update web-driver to be able to run e2e tests.         |
| `ios:dev`         | Build .ipa using dev environment vars                  |
| `ios:release`     | Build .ipa with production environment vars            |
| `android:dev`     | Build .apk using dev environment vars                  |
| `android:release` | Build .apk with production environment vars            |

### <a name="git-workflow"></a>Git Workflow
- Optionally you can use [Git flow](http://danielkummer.github.io/git-flow-cheatsheet/)
- If you want to bump the changelog, run "npm run release"
- This repo has a [mirror repo in gitlab for CI](https://gitlab.com/marco_turi/ionic2-boilerplate) after every push on master you will get automatically all tests and lints run. To get .ipa and .apk build you need to push to the release git branch. The reason is to avoid unnecessary builds (free limit is 100/month) for ios.  
- You should consider to write a shortcut in .bashrc for the following commands<br>
**Workflow:**<br>
```
git add .
npm run commit // this will run tslint + scss lint + commit
npm run push // this will run unit tests + push to master
// now check on GITLAB if there are no errors, than if you want push your commits to the release branch to get automatic ipa and apk
```

### <a name="links"></a>Useful Links
- [Search engine for find typescript typings](http://microsoft.github.io/TypeSearch/)
- [Cordova-xcode 8](https://dpogue.ca/articles/cordova-xcode8.html)
- [Ionic package setup](https://docs.ionic.io/services/package/)
- [Useful Hooks](https://github.com/driftyco/ionic-package-hooks)

### <a name="ionic-cordova"></a>Ionic & Cordova
- Avoid the use of ionic state commands and also ionic plugin/platform. Use directly cordova prepare (or cordova plugin/platform). Also save your plugin/platform only inside config.xml, not package.json to avoid confusion. See [this](https://github.com/driftyco/ionic-cli/issues/1324) for further informations. 

### <a name="webstorm"></a>Webstorm
- Set code style for typesript:
    - {import} -> { import }
    - import * from "lodash" -> import * from 'lodash'
- Set typescript settings to be used with the version inside node_modules instead of the bundled one (1.8)
- [Don't activate typescript compiler.](https://github.com/driftyco/ionic/issues/8303)
- Enable tslint in settings
- Download scss lint plugin and enable it

### <a name="windows"></a>Windows
- You should avoid Windows. I tried a lot of times and at the end found myself switching to a Mac VM or Hackintosh or Linux distro. The following tips are not resolutive but can help you set up a nice environment.
- Instead of windows terminal I used [cmder](https://github.com/cmderdev/cmder).
- If you use Webstorm. Set terminal settings as follow -> "cmd.exe" /k ""%CMDER_ROOT%\vendor\init.bat""
- Remember to re-start webstorm every time you make a change to the terminal.
- npm install --global --production windows-build-tools //node-gyp fix
- Set webstorm to write with line endingds LF (mac os or unix)
- To avoid git warnings: git config core.autocrlf false
- e2e commands is not working on windows, because the python server can't be launched. As a workaround add START /B before python -m and remove & at the end of the line in package.json. Anyway you will have to kill manually the process every time after every execution.

## <a name="license"></a>License
    Copyright (c) 2016 Marco Turi
    Source code is open source and released under the MIT license.
