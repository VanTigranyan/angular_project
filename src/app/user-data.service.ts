import {AfterViewInit, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserDataService implements AfterViewInit {

  constructor(private http: HttpClient) {
    this.getUserData();
  }

  userInfoArray;

  getUserData() {
    return this.http.get('../assets/data.json')
      .subscribe(data => this.userInfoArray = data);
  }

  addUserData( object: {name: string, lastName: string, userName: string, password: string, email: string, age: number} ) {
    this.userInfoArray.push({
      name: object.name,
      lastName: object.lastName,
      userName: object.userName,
      password: object.password,
      email: object.email,
      age: object.age
    });
    console.log(this.userInfoArray);
  }



  findUser(userName) {
    for (let i = 0; i < this.userInfoArray.length; i++) {
      if (this.userInfoArray[i].userName === userName) {
        console.log(this.userInfoArray[i]);
        return this.userInfoArray[i];
      }
    }
  }


  findUserName(userName) {
    console.log(userName, this.userInfoArray);
    for (let i = 0; i < this.userInfoArray.length; i++) {
      console.log(userName, this.userInfoArray);
      if (this.userInfoArray[i].userName === userName) {
        console.log(this.userInfoArray[i].userName);
        return true;
      }

    }
  }


    ngAfterViewInit() {
    }

}

