import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { UserListComponent } from './user/user-list.component';
import { UserThumbnailComponent } from './user/user-thumbnail.component'

@NgModule({
  declarations: [AppComponent, UserListComponent, UserThumbnailComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
