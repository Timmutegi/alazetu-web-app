import { Component, OnInit } from '@angular/core';

export interface Product {
  name: string;
  cost: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products = [
    {
      "name": "B-flat Ngomabook - Intermediate - 1st Edition",
      "cost": "Ksh 1490"
    },
    {
      "name": "E-flat Ngomabook - Intermediate - 1st Edition",
      "cost": "Ksh 1490"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
