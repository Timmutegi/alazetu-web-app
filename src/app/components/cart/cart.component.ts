import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Product {
  name: string;
  cost: string;
}

const PRODUCT_DATA: Product[] = [
  {
    name: "B-flat Ngomabook - Intermediate - 1st Edition",
    cost: "Ksh 1,490"
  },
  {
    name: "E-flat Ngomabook - Intermediate - 1st Edition",
    cost: "Ksh 1,490"
  },
];


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['name', 'cost'];
  dataSource = new MatTableDataSource(PRODUCT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}
