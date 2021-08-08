import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';

const routes: Routes = [
  {path: 'users', component: UsersListComponent},
  {path: 'create-user', component: CreateUsersComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'update-users/:id', component: UpdateUsersComponent},
  {path: 'users-detail/:id', component: UsersDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
