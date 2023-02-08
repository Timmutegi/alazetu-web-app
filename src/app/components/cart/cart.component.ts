import { Component, OnInit } from '@angular/core';

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
  products: Product[] = [
    {
      id: 1,
      name: "E-flat Ngomabook - Intermediate - 1st Edition",
      quantity: 3,
      cost: 1490
    },
    {
      id: 3,
      name: "Piano Ngomabook - Intermediate - 1st Edition",
      quantity: 3,
      cost: 1490
    },
    {
      id: 5,
      name: "Voice (Soprano, Alto) Ngomabook - Intermediate - 1st Edition",
      cost: 1490,
      quantity: 6
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.calculateTotal();
  }

  updateProductQuantity(data: any) {
    const target_product = this.products.findIndex((product => product.id == data.id));
    this.products[target_product].quantity = data.quantity;
    this.calculateTotal();
  }

  calculateTotal () {
    this.totalPrice = this.products.reduce(function (accumulator, item) {
      return accumulator + item.quantity * item.cost;
    }, 0);  
  }

  removeCartItem(data: any) {
    this.products = this.products.filter(product => product.id != data.id);
    this.calculateTotal();
  }

}
