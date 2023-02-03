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

}
