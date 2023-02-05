import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faCartPlus = faCartShopping;

  constructor(
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout();
  }

  cartItems(): Number {
    return this.auth.fake_user.cart.length;
  }

  isLoggedIn(): boolean {
    return this.auth.fake_user.logged_in;
  }

}
