import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FlashMessagesService } from 'flash-messages-angular';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor(private flashMessage: FlashMessagesService) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `${error.error}`;
    }
    this.flashMessage.show(errorMessage, {cssClass: 'alert-danger rounded-0', timeout: 10000});
  }
}
