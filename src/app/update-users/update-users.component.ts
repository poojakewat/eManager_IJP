import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {

   id?: number;
  user: Users = new Users();
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {


  this.id = this.route.snapshot.params['id'];

    this.userService.getusersById(this.id!).subscribe( data =>{
      this.user = data;
    }, error => console.log(error));
}
onsubmit(){
    this.userService.updateusers(this.id!, this.user).subscribe( data =>{
      this.goToUsersList();
    }
    , error => console.log(error));
  }

  goToUsersList(){
    this.router.navigate(['/users']);
  }
}
