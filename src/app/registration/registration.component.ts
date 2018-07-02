import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserDataService, private router: Router) { }
  form: FormGroup;

  onSubmit() {
    console.log('submitted')
    this.userService.addUserData({
      name: this.form.controls.name.value,
      lastName: this.form.controls.lastName.value,
      userName: this.form.controls.userName.value,
      password: this.form.controls.password.value,
      email: this.form.controls.email.value,
      age: this.form.controls.age.value
    });
    this.form.reset();
    console.log(this.userService.userInfoArray);
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      agree: new FormControl('', [Validators.required])
    });
  }

  ngAfterViewInit(){
    console.log(this.form);
  }

}
