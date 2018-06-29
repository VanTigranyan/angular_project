import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserDataService {

  constructor(private http: HttpClient) { }
  userInfoArray;

  getUserData() {
    return this.http.get('../assets/data.json')
      .subscribe(data => this.userInfoArray = data);
  }

  addUserData(name: string, lastName: string, userName: string, email: string, age: number) {
    this.userInfoArray.push({
      name: name,
      lastName: lastName,
      userName: userName,
      email: email,
      age: age
    });
  }


  findUserName(userName) {
    for (const item of this.userInfoArray) {
      if (item[userName] === userName) {
        return true;
      }
      return false;
    }
  }
  findUser(userName) {
    for (const item of this.userInfoArray){
      if (item[userName] === userName){
        return item;
      }
    }
  }
}
