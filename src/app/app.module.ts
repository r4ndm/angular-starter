import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UserListComponent } from './user/user-list.component';
import { UserThumbnailComponent } from './user/user-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component'

@NgModule({
  declarations: [AppComponent, UserListComponent, UserThumbnailComponent, NavbarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
