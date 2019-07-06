import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import {
  // Services
  AuthenticationApiService,
  // Models
  Login,
} from '@app/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  newLogin: Login;
  returnUrl: string;

  public logInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authenticationApiService: AuthenticationApiService) {
    // redirect to home if already logged in
    if (this.authenticationApiService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.logInForm.valueChanges.subscribe((aValue) => {
      this.newLogin = new Login();
      this.newLogin.fromForm(aValue);
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  onSubmit() {
    const errorFields = {
      USERNAME_NOT_EMPTY: 'username',
      USERNAME_MAX_LENGTH_100: 'username',
      PASSWORD_NOT_EMPTY: 'password',
      PASSWORD_MAX_LENGTH_100: 'password',
    };

    for (const control in this.logInForm.controls) {
      if (this.logInForm.controls.hasOwnProperty(control)) {
        this.logInForm.controls[control].markAsUntouched();
        this.logInForm.controls[control].setErrors({});
      }
    }

    const aLogin = this.newLogin;
    this.authenticationApiService.login(aLogin)
      .subscribe(
        (login) => this.router.navigate([this.returnUrl]),
        (errors) => {
          for (const error of errors) {
            this.logInForm.controls[errorFields[error]].markAsTouched();
            this.logInForm.controls[errorFields[error]].setErrors({[error]: true});
          }
        });
  }

  signUp() {
    this.router.navigate(['authentication/sign-up']);
  }

}
