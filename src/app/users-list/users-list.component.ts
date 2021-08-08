import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Users } from '../users'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  user? : Users[];

  constructor( private userService: UserService,
    private router: Router    ){ } 
  
  ngOnInit(): void {
    this.getUser();
  }

  private getUser(){
  this.userService.getUsersList().subscribe( data => {
    this.user = data;

  });
  
}
  usersDetails(id: number){
    this.router.navigate(['users-detail', id]);
  }

  updateusers(id: number){
    this.router.navigate(['update-users', id]);
  }

  deleteusers(id: number){
    this.userService.deleteusers(id).subscribe( data => {
      console.log(data);
      this.getUser();
    })
  }
}
