import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private auth: AuthenticationService
  ) {}

  canActivate() {
    if (this.auth.fake_user.logged_in === false) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
