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
   So index.html looks like [template 1](html-templates.md/#Template-1) in html-templates.md

1. Create the first component: user-list component. We can use ```ng generate component``` but we'll do this by hand this time
   1. Create user/user-list.component.ts: create UserListComponent class, add @Component decorator with selector, templateUrl. Add a list of users
      1. NOTE the ```user``` parameter cannot be private. Private variables are not visible from the template
   1. Create user-list.component.html. Use [template 2](html-templates.md/#Template-2) 
   1. Update app.component.html to ```<user-list></user-list>```
   1. Import and add UserListComponent to the declarations in AppModule

1. Create the UserThumbnail component:
   1. Create user/user-thumbnail.component.ts. Create an input (```@Input```) parameter ```user```. 
      1. Same view as previously ([template 2](html-templates.md/#Template-2))
      1. UserList component will display user-thumbnail and pass the user variable down using: ```<user-thumbnail> [user]=users[0]></user-thumbnail>```
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
   1. Update navbar.component.html to use html [template 3](html-templates.md/#Template-3), and styles in navbar.component.css
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
      Alternatively we can use row, col divs as in html [template 4](html-templates.md/#Template-4)
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
      ```<div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}"> ...```
      <br>
      both green and bold classes will be applied if the condition is true
      * or using a function:
      <br>
      ```<div [ngClass]="getClassFunction()">...```
      <br>
      and the function returns {green: true, bold: true} or {green: false, bold: false}, or better, the function can return a string like this: 'green bold' or array ['green', 'bold']
      * if the div already had a class applied to it, like 
      ```<div class="well" [ngClass]=...>```, then ngClass classes would be applied in addition to the "well" class
   1. Styles can be applied using ngStyle
      ```html
      <div [ngStyle]="{'color': event?.time === '8am' ? '#003300' : '#bbb', 'font-weight':...">
      ```
      or using a function: 
      ```<div [ngStyle]="styleFunction()">...```,
      where the function returns: {color: '#003300', 'font-weight': 'bold'}

1. Services
   Services are used to create logic that is shared across components. This is done by simply creating a class, registering it in the ```Providers``` section in the module and injecting it into wherever component needs it.
   1. Create a UserService class with a getUsers method that returns a list of users
   1. Add it to the ```Providers``` section in app.module
   1. Add it as a parameter in the UserListComponent constructor so it is injected in
   1. While not necessary, it is better to mark the service with the ```@Injectable()``` decorator. This is required if the injectable class (e.g. UserService) has dependencies that need to be injected into it

1. Routing
   * We'll create a new UserDetails component (```ng new component user-detail```). This component will get that user details from UserService and display the details in the details page
   * use [template 5](html-templates.md/#Template-5)
   * selector is not needed in this component and can be removed because it is not used in any other component's template. It will be shown when it is routed to
   * now we have a new component to display, how do we display it? For this we'll bring in routing
   * app.component.html currently looks like this:
     ```html
     <app-navbar></app-navbar>
     <app-user-list></app-user-list>
     ```
     This puts the navbar at the top and the user-list component below it which is displayed when the app is started. We want the bottom part to show whatever we are routing to, so we change app-component to:
     ```html
     <app-navbar></app-navbar>
     <router-outlet></router-outlet>
     ```
     This also means we no longer need the ```<app-user-list>``` selector. This can be deleted in the UserList component
   * Now we need to create a routes objects in routes.ts
     ```typescript
     export const appRoutes: Routes = [
       { path: 'users', component: UserListComponent },
       { path: 'users/:id', component: UserDetailsComponent },
       { path: '', redirectTo: '/users', pathMatch: 'full' }
     ];
     ```
   * We need to include RouterModule in AppModule and initialize it with appRoutes:
     ```typescript
     imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
     ]
     ```
   * Good time to review base href ```<base href="/">``` in index.html in case the app is hosted in some path
   * To get the parameter value from the ```users/:id``` path, inject ```ActivatedRoute``` into the component and get the value using ```this.route.snapshot.params['id']```
     * Note tslint doesn't like this. Use ```trhis.route.snapshot.params.id```
   * Router link: in the UserThumbnail template, we can add ```<div [routerLink]="['/users', 'user.id']"...>```. This will make it route to the user details page when we click on one of the user
   * Now we want to hook up the "All Users" navbar menu item to the main users page. Do do this, we add the same ```routerLink``` to the all users menu item in nav.component.html
   * ```[routerLink]``` is to navigate from html. To navigate in code, first inject ```Router``` into the component and then use ```this.router.navigate(['/users'])```
   * Route guard: to add validation before routing. For example, validate id in ```/user/:id``` is valid:
      * create an injectable service ```UserRouteActivator``` that implements ```CanActivate```
      * implement a ```canActivate``` method that returns true or false. If return false then navigation is cancelled. App then navigates to the base url. Other return types are possible for finer control, for example returning a ```UrlTree``` for navigation
      * route is already passed in to this method as the first argument of type ```ActivatedRouteSnapshot```. Cann get route parameters from here ```route.params['id']```
      * in the validation logic, you can redirect to an errors page. To do this, inject ```Router``` and use ```router.navigate(['/404'])```
      * add this service to app.module Providers, since it is a service
      * in the routes object, add canActivate like: ```{ path: 'users/:id', component: UserDetailsComponent, canActivate: [UserRouteActivator] }```
      * Similar to route activation, we can guard against route deactivation. For example to warn user from navigating out when there are unsaved changes. This can be done with the ```canDeactivate``` parameter in the path, implemented same way as ```canActivate```
      * BTW the activator/deactivator in path doesn't have to be a class. It can be a function. You'll have to use the long form of provider:
        ```typescript
        {
          provide: 'canDeactivateCreateUser',
          useValue: 'myMethodForDeactivationCheck'
        }
        ```
        The first argument to the canDeactivate method is the component itself, so you can check state of the component in the deactivation logic
      * Pre-loading data for component: if you want to load data before rendering a component, you can implement a ```Resolver``` service. Then use this service in the ```resolve``` parameter in the route. 
        ```typescript
        { path: 'users', component: UserListComponent, resolve: {users: UserListResolver} }
        ```
        The data returned from the resolver is made available to the component with the ```users``` route parameter as specified in the resolve parameter above. This can be accessed in the component as:
        ```typescript
        ngOnInit() {
           this.users = this.route.snapshot.data['events'];
        }
        ```
        The difference between this and doing all the work in ngOnInit is that with the resolver, the component is not rendered till the data is available. Without resolver, the component is rendered before ngOnInit is done
     * Styling active links can be done by adding a ```routerLinkActive``` directive:
       ```html
       <a [routerLink]="['/users']" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">All Users</a>
       ```
       and then define the "active" class in css (html [template 6](html-templates.md/#Template-6))
     * Summary:
       * To add routing, create a routes object with the appropriate paths and corresponding components
       * Import ```RouterModule``` in app.module and pass in the routes object
       * Navigate to routes either from html using ```[routerLink]``` or in code using ```router.navigate```
       * Add router guards through canActivate and canDeactivate services
       * Style active links using ```routerLinkActive``` directive and active class styling

1. Testing
   * Unit tests with Jasmine and Karma, e.g. user.service.spec.ts and for components
   * e2d tests

