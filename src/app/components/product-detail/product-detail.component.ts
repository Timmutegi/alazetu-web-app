import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  name: string = "B-flat Ngomabook - Intermediate - 1st Edition";
  cost: string = "Ksh 1,490";
  description: string = "An intermediate-level music book for b-flat instruments containing Kenyan songs. Ideal for use by students, teachers and musicians.";
  inputnumber = 0;
  faPlus = faPlus;
  faMinus = faMinus;

  constructor() { }

  ngOnInit(): void {
  }

  plus() {
    this.inputnumber = this.inputnumber + 1;
  }

  minus() {
    if (this.inputnumber != 0) {
      this.inputnumber = this.inputnumber - 1;
    }
  }

}
