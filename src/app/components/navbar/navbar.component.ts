import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faCartPlus = faCartShopping;
  cartItems = 0;
  private subscription!: Subscription;

  constructor(
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.subscription = this.auth.cartTotal$.subscribe(total => {
      this.cartItems = total;
    });  
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout(): void {
    this.auth.logout();
  }

  isLoggedIn(): boolean {
    return this.auth.fake_user.logged_in;
  }

}
