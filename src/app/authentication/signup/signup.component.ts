import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutesConfig } from 'src/app/configs/routes.config';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpForm: FormGroup;
  firstName = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  lastName = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]);
  hide = true;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private utilsService: UtilsService
  ) {
    this.signUpForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    });
  }

  getErrorMessage(field: any): string | void {
    // @ts-ignore
    const classField: any = this[field];
    if (classField?.hasError('required')) {
      return 'You must enter a value';
    } else if (classField?.hasError('email')) {
      return 'Not a valid email';
    } else if (classField?.hasError('pattern')) {
      return 'Not a valid password';
    }
  }

  sendForm() {
    if (this.signUpForm.valid) {
      const formValue = this.signUpForm.value;
      this.authService.signUp(formValue.firstName, formValue.lastName, formValue.email, formValue.password)
        .subscribe((response: any) => {
          if (!response.errors) {
            this.router.navigate([RoutesConfig.routes.auth.logIn]).then(() => {
              this.utilsService.showSnackBar('Now try can try to log in!', 'info-snack-bar');
            });
          } else if (response.errors[0].code === 10000) {
            this.utilsService.showSnackBar('This email is not available.', 'warning-snack-bar');
          }
        });
    }
  }
}
