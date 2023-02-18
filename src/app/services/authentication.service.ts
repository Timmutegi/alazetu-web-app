import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../modules/shared/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private cartTotalSubject = new BehaviorSubject<number>(0);
  cartTotal$ = this.cartTotalSubject.asObservable();
  user!: User | null;

  constructor(
    private api: ApiService
  ) { }

  login_user() {
    this.api.getwithAuth('/users/me', ).subscribe(
      res => {
        if (res) {
          this.user = res;
          this.updateCartTotalCount();
        }
      }
    )
  }

  logout() {
    this.user = null
  }

  addItemToCart(id: string) {
    if (this.user) {
      this.user.cartItems.push(id);
    }
    this.updateCartTotalCount();
  }

  removeItemFromCart(id: string) {
    if (this.user) {
      const index = this.user.cartItems.indexOf(id);
      if (index > -1) {
        this.user.cartItems.splice(index, 1);
      }
    }
    this.updateCartTotalCount();
  }

  updateCartTotalCount() {
    if (this.user) {
      let total = this.user.cartItems.length;
      this.cartTotalSubject.next(total);
    }
  }
}
