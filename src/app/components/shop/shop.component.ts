import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products = [
    {
      "name": "B-flat Ngomabook - Intermediate - 1st Edition",
      "cost": "Ksh 1,490"
    },
    {
      "name": "E-flat Ngomabook - Intermediate - 1st Edition",
      "cost": "Ksh 1,490"
    },
    {
      "name": "Guitar Ngomabook - Intermediate - 1st Edition",
      "cost": "Ksh 1,490"
    },
    {
      "name": "Piano Ngomabook - Intermediate - 1st Edition",
      "cost": "Ksh 1,490"
    },
    {
      "name": "Violin Ngomabook - Intermediate - 1st Edition",
      "cost": "Ksh 1,490"
    },
    {
      "name": "Voice (Soprano, Alto) Ngomabook - Intermediate - 1st Edition",
      "cost": "Ksh 1,490"
    },
    
  ];

  constructor() {}

  ngOnInit(): void {}
}
