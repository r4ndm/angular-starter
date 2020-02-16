import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../user.interface';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public user: IUser;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // TODO: need error checking here
    const userId = this.route.snapshot.params.id;
    this.user = this.userService.getUser(+userId);
  }
}
