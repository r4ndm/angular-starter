## Angular Starter

Staring point for angular projects. Contains a basic angular app with html templates for an app with navigation header and a few components for basic rendering. Clone the repository and rename the application, modules, components to whatever is appropriate. The steps below can be used as reference to start from scratch or content for an Angular starter course.


### Steps to create the project

#### Pre-requisites
1. Npm
1. Angular is installed globally (npm install -g @angular/cli)
1. VSCode (used here) or some editor
1. Optional:
   1. git (if needed) is installed and initialized (git init, git remote add origin ...). Could be done later
   1. Prettier VSCode plugin - to format from within VSCode editor. .vscode/settings.json has settings for this project. NOTE Prettier is not set as the default formatter at the workspace level. Doing so will keep the project from being opened if Prettier extension is not installed. If you have Prettier, you may want to set it as the default formatter in your user level settings.json:
   ```json
       "[typescript]": {
           "editor.defaultFormatter": "esbenp.prettier-vscode"
       },
       "[javascript]": {
           "editor.defaultFormatter": "esbenp.prettier-vscode"
       }
    ```

#### Steps
1. Create a new angular application:
   ```sh
   ng new angular-app --directory ./
   ```
 
   A new angular app is generated and dev packages are installed. The app can be build (npm run build), started (npm start) and accessed at http://localhost:4200

1. Config
   1. tsconfig.json - any typescript compiler specific changes you may want to make. No changes made in this project
   1. tslint -  Angular is still using tslint. Update tslint.json settings if needed. No changes made in this project
   1. Integrate Prettier with tslint (https://prettier.io/docs/en/integrating-with-linters.html#tslint):
      1. Install prettier and tslint extensions:<br>
         ```npm install prettier tslint-config-prettier tslint-plugin-prettier --save-dev```
      1. Update tslint.json to add the config:<br>
         ```json
         "extends": ["tslint:recommended", "tslint-plugin-prettier", "tslint-config-prettier"]
         "rules": {
             "prettier": true,
         }
         ```
      1. Add .prettierrc.json and .prettierignore files

1. Review angular.json, index.html, app.module.ts, app.component.ts, app.component.html, app.component.css
   1. app.module.ts, app.component.ts can be renamed to anything. These are not hard naming requirements
1. Update app.component.html to replace generated content with ```<h1>Hello World!</h1>```
1. Create assets/images folder and put some .png files there. We will use these images in the app
   1. Illustrates src/assets is part of assets folders in angular.json
1. Added to src/style.css some global styles that we'll use
1. Add bootstrap. We're adding a variant of bootstrap:
   ```npm install ngf-bootstrap --save```
   This brings in bootstrap and jquery dependencies that are old. TODO: Try using bootstrap directly
   1. In angular.json, add to styles and scripts sections:
      ```json
      "styles": [
        "node_modules/ngf-bootstrap/dist/bootstrap.min.css",
        "src/styles.css"
      ],
      "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.js"
      ]
      ```
      Order of styles is important. Place global src/styles.css at the end 
      <br>
      Stop/restart the server. Background is now black
1. Add some bootstrap formatting:
   <br>
   In index.html, replace ```<body>``` with ```<body class="container">```
   <br>
   So index.html looks like #1 in html-templates.md

1. Create the first component: user-list component. We can use ```ng generate component``` but we'll do this by hand this time
   1. Create user/user-list.component.ts: create UserListComponent class, add @Component decorator with selector, templateUrl. Add a list of users
      1. NOTE the ```user``` parameter cannot be private. Private variables are not visible from the template
   1. Create user-list.component.html. Use template #2
   1. Update app.component.html to ```<user-list></user-list>```
   1. Import and add UserListComponent to the declarations in AppModule

1. Create the UserThumbnail component:
   1. Create user/user-thumbnail.component.ts. Create an input (```@Input```) parameter ```user```. 
      1. Same view as previously (#2 in templates)
      1. UserList component will display user-thumbnail and pass the user variable down using: ```<user-thumbnail> [user]=user[0]></user-thumbnail>```
      1. Add the usual import, declarations in AppModule

1. Input, output and template variables
   1. Input variables: ```@Input``` variables are used to pass input to a component as done in the previous step
   1. Output variables: to pass data back to the parent component
      * create an @Output variable of type EventEmitter in the child: @Output() eventClick = new EventEmitter();
      * when you need to emit this, say on a button press in the child component, do this: this.eventClick.emit('foo')
      * in the parent: <user-thumbnail (eventClick)="handleEventClicked($event)" [user]="users[0]"></user-thumbnail>
   1. Tempate reference variables:
      * a parent component can access any public property or method in a child component directly using template variables
      * template variable is defined in the parent component when using the child component, like this:
        ```<user-thumbnail #thumbnail [user]="users[0]"></user-thumbnail>```
      * now in the parent, you can call thumbnail.method1(), assuming method1 is a public method in the child. Or thumbnail.property1 etc.
   1. So, parent/child component communication can be done with:
      1. input variables
      1. output variables
      1. template variables

1. Styling
   * In userthumbnail, we have this: ```<span>&nbsp;</span>```. Replace this with ```<span class="pad-left">``` and define pad-left in the UserThumbnail component style css:
      ```css
      .pad-left { margin-left: 10px; }
      ```
   * NOTE: style defined in a component is namespaced to that    component. So it's not affecting the parent. Even though the parent is using the same class, the styling is encapsulated and does not bleed out to the parent. Reverse is also true, styles defined in the parent component are not applied to the child. This is angular's built in view encapsulation. If you inspect, the name of the classes are dynamically created. Styles from styles.css (app level) are applied globally across the whole app

1. NavBar
   1. Create the NavBar component using the command below. nav is the subfolder. --flat is used to keep it from creating a navbar subfolder (default behavior is to create a subfolder)
      <br>
      ```ng generate component nav/navbar --flat```
   1. Update navbar.component.html to use html template #3, and styles in navbar.component.css
   1. Modify app.component.html to include nav-bar directive at the top:
      ```html
      <app-navbar></app-navbar>
      <user-list></user-list>
      ```

1. Repeating data
   * In UserList component, instead of passing a single user, we use *ngFor:
      ```html
      <user-thumbnail *ngFor="let userItem of users" [user]="userItem"></user-thumbnail>
      ```
      Alternatively we can use row, col divs as in html template #4
   * *ngFor is a structural directive - it modifies the dom (as opposed to hiding). Therefore it has a * prefix

1. Hiding content with *ngIf
   * *ngIf removes the div from the dom, as opposed to hiding it
     ```html
        <div *ngIf="user?.location">
            <span>Location: {{user.location.address}}</span>
            <span class="pad-left">{{user.location.city}}, {{user.location.country}}</span>
        </div>
     ````
   * alternatively you could use the html [hidden] directive to hide based on some condition. In this case the div element is still there, just hidden
     ```<div [hidden]="!event?.location"> ...  ```

1. ngSwitch: switch statement
   * ngSwitch has no * prefix like *ngFor and *ngIf
     ```html
      <div [ngSwitch]="event?.time">
         <span *ngSwitchCase="'8:00 am'">Early</span>
         <span *ngSwitchCase="'10:00 am'">Late</span>
         <span *ngSwitchDefault>Normal</span>
      </div>
      ```

1. Conditionally add css classes to elements
   1. Using class bindings:
      <br>
      ```<div [class.green]="event?.time === '8:00 am'" ...>```
      <br>
      this is a special type of binding called class binding and is parsed by angular. If this expression, i.e. event.time equals 8:00 am is true, then add the green class to the div
   1. Using ngClass:
      * ngClass inline
      <br>
      ```<div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}">...```
      <br>
      both green and bold classes will be applied if the condition is true
      * or using a function:
      <br>
      ```<div [ngClass]="getClassFunction()">...```
      <br>
      and the function returns {green: true, bold: true} or {green: false, bold: false}, or better, the function can return a string like this: 'green bold' or array ['green', 'bold']
      * if the div already had a class applied to it, like ```<div class="well" [ngClass]=...>```, then ngClass classes would be applied in addition to the "well" class
   1. Styles can be applied using ngStyle
      <br>
      ```<div [ngStyle]="{'color': event?.time === '8am' ? '#003300' : '#bbb', 'font-weight':...">```
      <br>
      or using a function:
      ```<div [ngStyle]="styleFunction()">...```
      where the function returns: {color: '#003300', 'font-weight': 'bold'}

