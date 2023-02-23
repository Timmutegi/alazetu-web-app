import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Product } from 'src/app/modules/shared/product';
import { User } from 'src/app/modules/shared/user';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  faCheck = faCheck;
  faXMark = faXmark;
  cartItems: string[]  = [];
  products: Product[] = [];
  isLoading = true;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private api: ApiService,
    private errorHandler: ErrorHandlingService
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
    if (this.isLoggedIn()) {
      if (this.auth.user) {
        this.cartItems = this.auth.user.cartItems;
      }
    }
  }

  fetchProducts() {
    this.api.get('/products').subscribe(
      res => {
        this.products = res;
        this.isLoading = false;
      },
      err => {
        this.isLoading = false;
        this.errorHandler.handleError(err);
      }
    )
  }

  viewProductDetails(id: string): void {
    this.router.navigate([`product/${id}`]);
  }

  addToCart(id: string): void {
    if (!this.auth.user) {
      this.router.navigate(['/login']);
    }
    this.auth.addItemToCart(id);
  }

  isLoggedIn(): User | null {
    return this.auth.user;
  }

  removeFromCart(id: string) {
    this.auth.removeItemFromCart(id);
  }
}
