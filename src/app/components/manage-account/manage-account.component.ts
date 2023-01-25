import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent {
  profileForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  resetPasswordForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  submitted = false;
  isLoading!: boolean;
  fieldTextType!: boolean;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  constructor( ) { }

  ngOnInit(): void {
  }

  get f() {
    return this.profileForm.controls;
  }

  get g() {
    return this.resetPasswordForm.controls;
  }

  toggle() {
    this.fieldTextType = !this.fieldTextType;
  }

  update() {

  }
}
