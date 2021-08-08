import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { Users } from '../users';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
 
 // id?: number
  //user: Users = new Users();
  user? : Users[];
  //constructor(private route: ActivatedRoute, private userService: UserService) { }
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
  /* ngOnInit(): void {
  

  this.id = this.route.snapshot.params['id'];

  //this.user = new Users();
  this.userService.getusersById(this.id!).subscribe( data => {
    this.user = data;
  
  });
  } */
}
