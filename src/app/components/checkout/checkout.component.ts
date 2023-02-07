import { Component, OnInit } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  cost: number;
  quantity: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  isLoading!: boolean;
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

  ngOnInit(): void {
    this.calculateTotal();
  }

  calculateTotal () {
    this.totalPrice = this.products.reduce(function (accumulator, item) {
      return accumulator + item.quantity * item.cost;
    }, 0);  
  }

  placeOrder() {
    
  }


}
