import { IUser } from '../user.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userList: IUser[] = [
    {
      id: 1,
      name: 'Bilbo Baggins',
      email: 'bbaggins@hobbiton.com',
      role: 'Hobbit chief',
      dateJoined: '12/12/2001',
      imageUrl: '',
      location: {
        address: '112 Bags End',
        city: 'Hobbiton',
        country: 'Shire'
      }
    },
    {
      id: 2,
      name: 'Frodo Baggins',
      email: 'fbaggins@hobbiton.com',
      role: 'Adventurer',
      dateJoined: '12/12/2001',
      imageUrl: '',
      location: {
        address: '115 Bags End',
        city: 'Hobbiton',
        country: 'Shire'
      }
    }
  ];

  public getUsers(): IUser[] {
    return this.userList;
  }
}
