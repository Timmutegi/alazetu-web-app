import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/modules/shared/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss'],
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
  user!: User;

  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.resetPasswordForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      newPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    if (this.auth.user) {
      this.user = this.auth.user;
      this.profileForm.setValue({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: 'johndoe@example.com'
      });
    }
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
  }

  resetPassword() {
    this.submitted = true;
    if (this.resetPasswordForm.invalid) {
      return;
    }
  }
}
