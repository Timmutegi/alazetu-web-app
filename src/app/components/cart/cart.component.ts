import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

export interface Product {
  id: number;
  name: string;
  cost: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalPrice = 0;
  cartItems: number[]  = [];
  selectedProducts: Product [] = [];
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
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.cartItems = this.auth.fake_user.cart;
    this.selectedProducts = this.products.filter(item => this.cartItems.includes(item.id));
    this.calculateTotal();
  }

  updateProductQuantity(data: any) {
    const target_product = this.selectedProducts.findIndex((product => product.id == data.id));
    this.selectedProducts[target_product].quantity = data.quantity;
    this.calculateTotal();
  }

  calculateTotal () {
    this.totalPrice = this.selectedProducts.reduce(function (accumulator, item) {
      return accumulator + item.quantity * item.cost;
    }, 0);  
  }

  removeCartItem(data: any) {
    this.selectedProducts = this.selectedProducts.filter(product => product.id != data.id);
    this.calculateTotal();
    this.auth.removeItemFromCart(data.id);
  }

}
