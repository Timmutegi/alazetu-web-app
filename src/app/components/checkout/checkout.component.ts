import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  isLoading!: boolean;
  products = [
    {
      "name": "B-flat Ngomabook - Intermediate - 1st Edition",
      "cost": "Ksh 1,490"
    },
    {
      "name": "E-flat Ngomabook - Intermediate - 1st Edition",
      "cost": "Ksh 1,490"
    }
  ];

  placeOrder() {
    
  }
}
