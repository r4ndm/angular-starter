import { Component, Input } from '@angular/core';
import { IUser } from './user.interface';

@Component({
  selector: 'app-user-thumbnail',
  templateUrl: './user-thumbnail.component.html',
  styleUrls: ['./user-thumbnail.component.css']
})
export class UserThumbnailComponent {
  @Input() public user: IUser;
}
