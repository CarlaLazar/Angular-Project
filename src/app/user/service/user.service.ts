import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getCurrentUser(): any {
    return null;
  }
}
