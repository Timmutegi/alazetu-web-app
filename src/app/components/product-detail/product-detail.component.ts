import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/modules/shared/product';
import { User } from 'src/app/modules/shared/user';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
  product_id: string = '';
  cartItems: string[]  = [];
  selectedProduct!: Product;
  isLoading = true;

  constructor(
    private auth: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.product_id = this.activatedRoute.snapshot.params['ID'];
    if (!this.product_id) {
      this.router.navigate(['/shop']);
    } 

    if (this.isLoggedIn()) {
      if (this.auth.user) {
        this.cartItems = this.auth.user.cartItems;
      }
    }

    this.getProduct();
  }

  getProduct() {
    this.api.get('/products/' + this.product_id).subscribe(
      res => {
        this.selectedProduct = res;
        this.isLoading = false;
      }
    )
  }

  plus() {
    this.inputnumber = this.inputnumber + 1;
  }

  minus() {
    if (this.inputnumber != 0) {
      this.inputnumber = this.inputnumber - 1;
    }
  }

  addToCart(id: string): void {
    if (!this.auth.user) {
      this.router.navigate(['/login']);
    }
    this.auth.addItemToCart(id);
    if (this.auth.user) {
      this.cartItems = this.auth.user.cartItems;
    }
  }

  isLoggedIn(): User | null {
    return this.auth.user;
  }

  removeFromCart(id: string) {
    this.auth.removeItemFromCart(id);
    if (this.auth.user) {
      this.cartItems = this.auth.user.cartItems;
    }
  }

}
