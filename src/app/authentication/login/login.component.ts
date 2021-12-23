import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutesConfig } from 'src/app/configs/routes.config';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: any;

  logInForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private utilsService: UtilsService
  ) {
    this.logInForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  getErrorMessage(field: string): string | void {
    // @ts-ignore
    const classField = this[field];
    if (classField?.hasError('required')) {
      return 'You must enter a value';
    } else if (classField?.hasError('email')) {
      return 'Not a valid email';
    }
  }

  sendForm() {
    if (this.logInForm.valid) {
      const formValue = this.logInForm.value;
      this.authService.logIn(formValue.email, formValue.password)
        .subscribe((response: any) => {
          if (!response.errors) {
            this.router.navigate([RoutesConfig.routes.article.myArticles]);
          } else if (response.errors[0].code === 11000) {
            this.utilsService.showSnackBar('Nice! You can now create new articles', 'info-snack-bar');
          }
        });
    }
  }
}
