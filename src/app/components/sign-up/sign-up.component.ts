import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;
  isLoading!: boolean;
  fieldTextType!: boolean;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  constructor( 
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  toggle() {
    this.fieldTextType = !this.fieldTextType;
  }

  signup() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }

    this.api.post('/users', this.signupForm.value).subscribe(
      res => {
        console.log(res);
      }
    )
  }

}
