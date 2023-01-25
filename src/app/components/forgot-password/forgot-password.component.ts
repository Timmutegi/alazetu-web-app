import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  submitted = false;
  isLoading!: boolean;
  faUnlock = faUnlock;

  constructor() { }

  ngOnInit(): void {
  }

  get f() {
    return this.forgotPasswordForm.controls;
  }

  login() {

  }
}
