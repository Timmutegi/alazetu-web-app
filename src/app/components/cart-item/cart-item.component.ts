import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  faPlus = faPlus;
  faMinus = faMinus;
  faTrash = faTrash;

  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() cost: number = 0;
  @Input() quantity: number = 0;

  @Output() newItemEvent = new EventEmitter<{id: number, quantity: number}>();

  plus() {
    this.quantity = this.quantity + 1;
    this.newItemEvent.emit({id: this.id, quantity: this.quantity});
  }

  minus() {
    if (this.quantity != 0) {
      this.quantity = this.quantity - 1;
      this.newItemEvent.emit({id: this.id, quantity: this.quantity});
    }
  }

  removeFromCart() {

  }
}
