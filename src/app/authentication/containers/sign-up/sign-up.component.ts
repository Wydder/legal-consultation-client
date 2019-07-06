import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  // Services
  AuthenticationApiService,
  // Models
  Signup,
} from '@app/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  newSignUp: Signup;

  public signUpForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authenticationApiService: AuthenticationApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    const errorFields = {
      USERNAME_NOT_EMPTY: 'username',
      USERNAME_MAX_LENGTH_100: 'username',
      PASSWORD_NOT_EMPTY: 'password',
      PASSWORD_MAX_LENGTH_100: 'password',
    };

    for (const control in this.signUpForm.controls) {
      if (this.signUpForm.controls.hasOwnProperty(control)) {
        this.signUpForm.controls[control].markAsUntouched();
        this.signUpForm.controls[control].setErrors({});
      }
    }

    const aLogin = this.newSignUp;
    this.authenticationApiService.signup(aSignUp)
      .subscribe(
        (login) => this.router.navigate([this.returnUrl]),
        (errors) => {
          for (const error of errors) {
            this.signUpForm.controls[errorFields[error]].markAsTouched();
            this.signUpForm.controls[errorFields[error]].setErrors({[error]: true});
          }
        });
  }

}
