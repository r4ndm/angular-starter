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


