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
             ...
         }
         ```

1. Review angular.json, index.html, app.module.ts, app.component.ts, app.component.html, app.component.css
   1. app.module.ts, app.component.ts can be renamed to anything. These are not hard naming requirements
1. Update app.component.html to replace generated content with ```<h1>Hello World!</h1>```
1. Create assets/images folder and put some .png files there. We will use these images in the app
   1. Illustrates src/assets is part of assets folders in angular.json
1. Added to src/style.css some global styles that we'll use