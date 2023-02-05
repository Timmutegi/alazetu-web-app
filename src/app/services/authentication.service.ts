import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  fake_user = {
    logged_in: false,
    firstname: "Timothy",
    lastname: "Mbaka",
    cart: [1, 3, 5]
  }

  constructor() { }

  login_user() {
    this.fake_user = {
      logged_in: true,
      firstname: "Timothy",
      lastname: "Mbaka",
      cart: [1, 3, 5]
    }
  }

  logout() {
    this.fake_user = {
      logged_in: false,
      firstname: "Timothy",
      lastname: "Mbaka",
      cart: []
    };
  }
}
