import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  isLoading!: boolean;
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

  calculateTotal () {
    this.totalPrice = this.selectedProducts.reduce(function (accumulator, item) {
      return accumulator + item.quantity * item.cost;
    }, 0);  
  }

  placeOrder() {
    
  }


}
