import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent {
  profileForm!: FormGroup;
  resetPasswordForm!: FormGroup;
  submitted = false;
  isLoading!: boolean;
  fieldTextType!: boolean;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  profileFormSubmitted = false;

  constructor( ) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  
    this.resetPasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
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

  updateProfile() {
    this.profileFormSubmitted = true;
    if (this.profileForm.invalid) {
      return;
    }

    console.log(this.profileForm.value);
  }

  resetPassword() {
    this.submitted = true;
    if (this.resetPasswordForm.invalid) {
      return;
    }

    console.log(this.resetPasswordForm.value);
  }
}
