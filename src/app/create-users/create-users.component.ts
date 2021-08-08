import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Users } from '../users';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {


    user: Users = new Users();
    constructor(private userService: UserService,
      private router: Router) { }
  
  ngOnInit(): void {
  }

  saveUser(){
    this.userService.createUsers(this.user).subscribe( data =>{
      console.log(data);
      this.goTouserList();
    },
    error => console.log(error));
  }
 
  goTouserList(){
    this.router.navigate(['/users']);
  } 
  
  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }
}

