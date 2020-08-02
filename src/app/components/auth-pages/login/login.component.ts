import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = 'rohit';
  password: string = 'Rohit123!@#';
  constructor(
    private data: DataService,
    private auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {}
  login() {
    const userdata = this.data.getUserData();
    if (
      userdata.username === this.username &&
      userdata.password === this.password
    ) {
      this.auth.setAuthValue(true);
      this._router.navigate(['']);
    } else {
      alert('Wrong Credentials');
    }
  }
}
