import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Product } from 'src/app/modules/shared/product';
import { ApiService } from 'src/app/services/api.service';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  totalPrice = 0;
  cartItems: string[]  = [];
  selectedProducts: Product [] = [];
  products: Product[] = [];
  isLoading = true;

  constructor(
    private auth: AuthenticationService,
    private api: ApiService,
    private errorHandler: ErrorHandlingService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
    if (this.auth.user) {
      this.cartItems = this.auth.user.cartItems;
    }
  }

  fetchProducts() {
    this.api.get('/products').subscribe(
      res => {
        this.products = res;
        this.isLoading = false;
        this.selectedProducts = this.products.filter(item => this.cartItems.includes(item._id));
        this.selectedProducts = this.selectedProducts.map((product) => ({ ...product, quantity: 2 }));
        this.calculateTotal();
      },
      err => {
        this.isLoading = false;
        this.errorHandler.handleError(err);
      }
    )
  }

  calculateTotal () {
    this.totalPrice = this.selectedProducts.reduce(function (accumulator, item) {
      return accumulator + item.quantity * item.price;
    }, 0);  
  }

  placeOrder() {
    
  }

}
