import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isAuth = false;
  constructor() { }

  get isAuthenticated()  {
    return this.isAuth;
  }

  set isAuthenticated(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  login() {
    localStorage.setItem('token', '');
    this.isAuthenticated = true;
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
  }
}
