import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { StorageService } from 'src/app/shared/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = "endpoint";
  loginStatus = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient,
    private cookieService: CookieService,
    private storageService: StorageService,
    private router: Router,) {
  }

  signUp(firstName: string, lastName: string, email: string, password: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('firstName', firstName);
    params.set('lastName', lastName);
    params.set('email', email);
    return this.http.post<any>(this.endpoint + "signup", params, { observe: 'response' })

  }

  logIn(email: string, password: string): Observable<HttpResponse<any>> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('email', email);
    params.set('password', password);
    return this.http.post<any>(this.endpoint + "login", params, { observe: 'response' })
      .pipe(
        tap((resp: HttpResponse<any>) => {
          if (resp.headers.get('x-auth')) {
            // this.cookieService.set("currentUser", resp.headers.get('x-auth') );
            this.loginStatus.next(true);
          }
          return resp;
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    this.loginStatus.next(false);

    this.cookieService.deleteAll();
    this.router.navigate(['/login']);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  isLoggedIn(): boolean {
    try {
      const token = this.storageService.getCookie('accessToken');
      if (token) {
        return !!jwt_decode(token);
      }
      return false;
    } catch (Error) {
      return false;
    }
  }

  private hasToken(): boolean {
    return this.cookieService.check('currentUser');
  }
}
