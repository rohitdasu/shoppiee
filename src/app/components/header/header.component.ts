import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  cartNum: number = 0;
  constructor(
    private _router: Router,
    private auth: AuthService,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.auth.currentState.subscribe((val) => {
      this.isLoggedIn = val;
    });
    this.data.currentCartSize.subscribe((val) => {
      this.cartNum = val;
    });
  }
  login() {
    this._router.navigate(['login']);
  }
  logout() {
    this.auth.setAuthValue(false);
  }
  gotoTop(x: string) {
    this._router.navigate(['top-wear']);
  }
  gotoCart() {
    this._router.navigate(['cart']);
  }
  info() {
    alert('Please use MEN -> Top-Wear only');
  }
}
