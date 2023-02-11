import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private cartTotalSubject = new BehaviorSubject<number>(0);
  cartTotal$ = this.cartTotalSubject.asObservable();
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
    this.updateCartTotalCount();
  }

  logout() {
    this.fake_user = {
      logged_in: false,
      firstname: "Timothy",
      lastname: "Mbaka",
      cart: []
    };
  }

  addItemToCart(id: number) {
    this.fake_user.cart.push(id);
    this.updateCartTotalCount();
  }

  removeItemFromCart(id: number) {
    const index = this.fake_user.cart.indexOf(id);
    if (index > -1) {
      this.fake_user.cart.splice(index, 1);
    }
    this.updateCartTotalCount();
  }

  updateCartTotalCount() {
    let total = this.fake_user.cart.length;
    this.cartTotalSubject.next(total);
  }

}
