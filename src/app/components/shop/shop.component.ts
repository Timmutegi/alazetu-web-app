import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/services/authentication.service';

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

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addToCart(): void {
    if (!this.auth.fake_user.logged_in) {
      this.router.navigate(['/login']);
    }
  }

  removeFromCart() {
    
  }
}
