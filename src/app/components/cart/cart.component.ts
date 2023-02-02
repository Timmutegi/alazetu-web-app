import { Component, OnInit } from '@angular/core';

export interface Product {
  name: string;
  cost: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalPrice = 0;
  products = [
    {
      name: "B-flat Ngomabook - Intermediate - 1st Edition",
      quantity: 2,
      cost: 1490
    },
    {
      name: "E-flat Ngomabook - Intermediate - 1st Edition",
      quantity: 3,
      cost: 1490
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.calculateTotal();
  }

  calculateTotal () {
    this.totalPrice = this.products.reduce(function (accumulator, item) {
      return accumulator + item.quantity * item.cost;
    }, 0);  
  }

}
