import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConfig } from '../configs/routes.config';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const authRoutes = RoutesConfig.routesNames.auth;

const authenticationRoutes: Routes = [
  { path: authRoutes.signUp, component: SignupComponent },
  { path: authRoutes.logIn, component: LoginComponent },
  { path: '**', redirectTo: RoutesConfig.routes.error404 }
];

@NgModule({
  imports: [
    RouterModule.forChild(authenticationRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AuthenticationRoutingModule {
}