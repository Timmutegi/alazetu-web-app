import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Product } from 'src/app/modules/shared/product';
import { ApiService } from 'src/app/services/api.service';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
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

  updateProductQuantity(data: any) {
    const target_product = this.selectedProducts.findIndex((product => product._id == data.id));
    this.selectedProducts[target_product].quantity = data.quantity;
    this.calculateTotal();
  }

  calculateTotal () {
    this.totalPrice = this.selectedProducts.reduce(function (accumulator, item) {
      return accumulator + item.quantity * item.price;
    }, 0);  
  }

  removeCartItem(data: any) {
    this.selectedProducts = this.selectedProducts.filter(product => product._id != data.id);
    this.calculateTotal();
    this.auth.removeItemFromCart(data.id);
  }

}
