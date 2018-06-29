import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDataService} from '../user-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserDataService, private router: Router) {
  }

  form: FormGroup;

  onSubmit() {
    if (this.userService.findUserName(this.form.controls.userName.value)) {
      if (this.userService.findUser(this.form.controls.userName.value).password === this.form.controls.password.value) {
        this.router.navigate(
          ['/user-page'],
            {
              queryParams: {
                userName: this.form.controls.userName.value
              }
            }
        );
      }
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(6)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

}
