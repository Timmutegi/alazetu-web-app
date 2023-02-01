import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  fake_user = {
    logged_in: false,
    firstname: "Timothy",
    lastname: "Mbaka",
    cart: 0
  }

  constructor() { }

  login_user() {
    this.fake_user = {
      logged_in: true,
      firstname: "Timothy",
      lastname: "Mbaka",
      cart: 3
    }
  }

  logout() {
    this.fake_user = {
      logged_in: false,
      firstname: "Timothy",
      lastname: "Mbaka",
      cart: 0
    };
  }
}
