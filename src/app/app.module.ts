import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list.component';
import { UserThumbnailComponent } from './user/user-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { UserService } from './user/services/user.service';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { UserRouteActivator } from './user/services/userroute-activator';
import { Error404Component } from './error/error.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserThumbnailComponent, NavbarComponent, UserDetailsComponent, Error404Component],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [UserService, UserRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule {}
