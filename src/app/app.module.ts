import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list.component';
import { UserThumbnailComponent } from './user/user-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { UserService } from './user/services/user.service';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserThumbnailComponent, NavbarComponent],
  imports: [BrowserModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
