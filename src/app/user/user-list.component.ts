import { Component, OnInit } from '@angular/core';

import { IUser } from './user.interface';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  public users: IUser[] = null;

  public constructor(private userService: UserService) {}

  public ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
