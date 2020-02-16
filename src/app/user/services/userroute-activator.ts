import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserRouteActivator implements CanActivate {
  public constructor(private userService: UserService, private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const userId = route.params.id; // ['id'];
    const userExists = !!this.userService.getUser(+userId);

    if (!userExists) {
      this.router.navigate(['/404']);
    }

    return userExists;
  }
}
