import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList:any[] = [];
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getUsers().subscribe((res:any) => {
      this.usersList = res.data;
    })
  }

  deleteUser(index){
    this.usersList.splice(index, 1);
  }

  viewUser(index){
    this.userService.setUser(this.usersList[index]);
    this.router.navigate(['user', this.usersList[index].id]);
  }

}
