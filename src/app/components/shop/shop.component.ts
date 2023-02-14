import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  faCheck = faCheck;
  faXMark = faXmark;
  cartItems: number[]  = [];
  products: Product[] = [
    {
      id: 0,
      name: "B-flat Ngomabook - Intermediate - 1st Edition",
      quantity: 2,
      cost: 1490
    },
    {
      id: 1,
      name: "E-flat Ngomabook - Intermediate - 1st Edition",
      quantity: 3,
      cost: 1490
    },
    {
      id: 2,
      name: "Guitar Ngomabook - Intermediate - 1st Edition",
      quantity: 2,
      cost: 1490
    },
    {
      id: 3,
      name: "Piano Ngomabook - Intermediate - 1st Edition",
      quantity: 3,
      cost: 1490
    },
    {
      id: 4,
      name: "Violin Ngomabook - Intermediate - 1st Edition",
      cost: 1490,
      quantity: 5
    },
    {
      id: 5,
      name: "Voice (Soprano, Alto) Ngomabook - Intermediate - 1st Edition",
      cost: 1490,
      quantity: 6
    },
  ];

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.cartItems = this.auth.fake_user.cart;
    }
  }

  viewProductDetails(id: number): void {
    this.router.navigate([`product/${id}`]);
  }

  addToCart(id: number): void {
    if (!this.auth.fake_user.logged_in) {
      this.router.navigate(['/login']);
    }
    this.auth.addItemToCart(id);
  }

  isLoggedIn(): boolean {
    return this.auth.fake_user.logged_in;
  }

  removeFromCart(id: number) {
    this.auth.removeItemFromCart(id);
  }
}
