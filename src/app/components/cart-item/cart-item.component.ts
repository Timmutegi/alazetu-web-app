import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  title = 'angularbootstrap';
  inputnumber = 0;
  faPlus = faPlus;
  faMinus = faMinus;
  faTrash = faTrash;
  
  plus() {
   this.inputnumber = this.inputnumber+1;
  }

  minus() {
    if(this.inputnumber != 0) {
      this.inputnumber = this.inputnumber-1;
    }
  }
}