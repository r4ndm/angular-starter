## Angular Starter

Staring point for angular projects. Contains a basic angular app with html templates for an app with navigation header and a few components for basic rendering. Clone the repository and rename the starter module, components to whatever is appropriate. The steps below can be used as reference to start from scratch.


### Steps to create the project

#### Pre-requisites
1. Npm
1. Angular is installed globally (npm install -g @angular/cli)
1. VSCode (used here) or some editor
1. Optional:
   1. git (if needed) is installed and initialized (git init, git add remote ...). Could be done later
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

