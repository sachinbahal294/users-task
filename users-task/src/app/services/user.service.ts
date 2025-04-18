import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService{
    selectedUser = {};
    constructor(private http: HttpClient){}

    getUsers(){
        return this.http.get('https://reqres.in/api/users');
    }

    setUser(user){
        this.selectedUser = user;
    }

    getUser(){
        return this.selectedUser;
    }
}