import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ErrorHandlingService } from 'src/app/services/error-handling.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  isLoading!: boolean;
  fieldTextType!: boolean;
  faRightToBracket = faRightToBracket;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private api: ApiService,
    private errorHandler: ErrorHandlingService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
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
    this.isLoading = true;
    
    this.api.login('/auth', this.loginForm.value).subscribe(
      res => {
        localStorage.setItem('authToken', res);
        this.auth.login_user();
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      err => {
        this.isLoading = false;
        this.errorHandler.handleError(err);
      }
    )
  }
}
