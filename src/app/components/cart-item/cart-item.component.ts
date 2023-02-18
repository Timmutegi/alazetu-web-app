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

  @Input() id: string = '';
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() quantity: number = 0;

  @Output() newQuantityEvent = new EventEmitter<{id: string, quantity: number}>();
  @Output() removeItemEvent = new EventEmitter<{id: string}>();

  plus() {
    this.quantity = this.quantity + 1;
    this.newQuantityEvent.emit({id: this.id, quantity: this.quantity});
  }

  minus() {
    if (this.quantity != 0) {
      this.quantity = this.quantity - 1;
      this.newQuantityEvent.emit({id: this.id, quantity: this.quantity});
    }
  }

  removeFromCart() {
    this.removeItemEvent.emit({id: this.id})
  }

}
