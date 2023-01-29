import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  faCheck = faCheck;
  products = [
    {
      "name": "B-flat Ngomabook - Intermediate - 1st Edition",
      "cost": "Ksh 1,490",
      "cart": true
    },
    {
      "name": "E-flat Ngomabook - Intermediate - 1st Edition",
      "cost": "Ksh 1,490",
      "cart": false
    },
    {
      "name": "Guitar Ngomabook - Intermediate - 1st Edition",
      "cost": "Ksh 1,490",
      "cart": true
    },
    {
      "name": "Piano Ngomabook - Intermediate - 1st Edition",
      "cost": "Ksh 1,490",
      "cart": true
    },
    {
      "name": "Violin Ngomabook - Intermediate - 1st Edition",
      "cost": "Ksh 1,490",
      "cart": false
    },
    {
      "name": "Voice (Soprano, Alto) Ngomabook - Intermediate - 1st Edition",
      "cost": "Ksh 1,490",
      "cart": true
    },
    
  ];
cart: any;

  constructor() {}

  ngOnInit(): void {}

  addToCart(): void {

  }
}
