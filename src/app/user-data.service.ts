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

  addUserData(name: string, lastName: string, userName: string, password: string, email: string, age: number) {
    this.userInfoArray.push({
      name: name,
      lastName: lastName,
      userName: userName,
      password: password,
      email: email,
      age: age
    });
  }



  findUser(userName) {
    for (let i = 0; i > this.userInfoArray.length; i++) {
      if (this.userInfoArray[i].userName === userName) {
        return this.userInfoArray[i];
      }
    }
  }


  findUserName(userName) {
    console.log(userName, this.userInfoArray);
    for (let i = 0; i > this.userInfoArray.length; i++) {
      if (this.userInfoArray[i].userName === userName){
        return true;
      }
    }
  }


    ngAfterViewInit() {
    }

}

