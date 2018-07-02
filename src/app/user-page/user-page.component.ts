import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../user-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor( private userService: UserDataService, private route: ActivatedRoute) { }
  user;
  userInfo;


  ngOnInit() {
    this.route.queryParams.subscribe(value => this.user = value.userName );
    console.log(this.user);
  }

  ngAfterViewInit() {
    this.userInfo = this.userService.findUser(this.user);
    console.log(this.userInfo);
  }

}
