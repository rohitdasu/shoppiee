import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject(false);
  currentState = this.loggedIn.asObservable();

  constructor() {}
  setAuthValue(value: boolean) {
    this.loggedIn.next(value);
  }
}
