import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/services/authentication.service';

export interface Product {
  id: number;
  name: string;
  cost: number;
  quantity: number;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  description: string = "An intermediate-level music book for b-flat instruments containing Kenyan songs. Ideal for use by students, teachers and musicians.";
  inputnumber = 0;
  faPlus = faPlus;
  faMinus = faMinus;
  faCheck = faCheck;
  product_id: number = 0;
  cartItems: number[]  = [];
  selectedProduct!: Product;
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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.product_id = this.activatedRoute.snapshot.params['ID'];
    let filteredProducts = this.products.filter(product => product.id == this.product_id).length;
    if (filteredProducts == 0) {
      this.router.navigate(['/shop']);
    } else {
      this.selectedProduct = this.products.filter(product => product.id == this.product_id)[0];
    }

    if (this.isLoggedIn()) {
      this.cartItems = this.auth.fake_user.cart;
    }
  }

  plus() {
    this.inputnumber = this.inputnumber + 1;
  }

  minus() {
    if (this.inputnumber != 0) {
      this.inputnumber = this.inputnumber - 1;
    }
  }

  addToCart(id: number): void {
    if (!this.auth.fake_user.logged_in) {
      this.router.navigate(['/login']);
    }
    this.auth.addItemToCart(id);
    this.cartItems = this.auth.fake_user.cart;
  }

  isLoggedIn(): boolean {
    return this.auth.fake_user.logged_in;
  }

  removeFromCart(id: number) {
    this.auth.removeItemFromCart(id);
    this.cartItems = this.auth.fake_user.cart;
  }

}
