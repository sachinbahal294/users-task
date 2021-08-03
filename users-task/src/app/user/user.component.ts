import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  selectedUser:any = {};
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.selectedUser = this.userService.getUser();
    if(!this.selectedUser || this.selectedUser.id == null){
      this.router.navigate([""]);
    }
  }

}
