import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
    // this.show_status = false;
    // this.display_status_check = false;
    // this.background_task_running = false;
    // this.status = "";
  }

}
