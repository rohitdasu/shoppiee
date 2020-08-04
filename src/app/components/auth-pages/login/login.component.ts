import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscribable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = 'rohit';
  password: string = 'Rohit123!@#';
  private sub: any;
  x;
  constructor(
    private data: DataService,
    private auth: AuthService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.x = params;
      console.log(this.x);
    });
  }
  login() {
    const userdata = this.data.getUserData();
    if (
      userdata.username === this.username &&
      userdata.password === this.password
    ) {
      if (this.x.id === 'cart') {
        this.auth.setAuthValue(true);
        this._router.navigate(['/buy']);
      } else {
        this.auth.setAuthValue(true);
        this._router.navigate(['']);
      }
    } else {
      alert('Wrong Credentials');
    }
  }
}
