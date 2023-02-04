import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  submitted = false;
  isLoading!: boolean;
  fieldTextType!: boolean;
  faRightToBracket = faRightToBracket;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  constructor(
    private router: Router,
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }

  toggle() {
    this.fieldTextType = !this.fieldTextType;
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm.value);
    this.auth.login_user();
    this.router.navigate(['/home']);
  }
}
