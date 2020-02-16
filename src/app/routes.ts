import { Routes } from '@angular/router';
import { UserListComponent } from './user/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserRouteActivator } from './user/services/userroute-activator';
import { Error404Component } from './error/error.component';

export const appRoutes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailsComponent, canActivate: [UserRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];
