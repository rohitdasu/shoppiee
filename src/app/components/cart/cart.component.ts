import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any = null;
  cartNum: number;
  grandTotal: number = 0;
  constructor(
    private data: DataService,
    private auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.cart = this.data.getCartData();
    console.log(this.cart)
    this.data.currentCartSize.subscribe((val) => {
      this.cartNum = val;
    });
    this.grandTotal = this.sum();
  }
  sum() {
    var sum = 0;
    for (var i = 0; i < this.cartNum; i++) {
      sum += Number(this.cart[i]['price'] * this.cart[i]['Quantity']);
    }
    return sum;
  }
  buyNow() {
    let x;
    this.auth.currentState.subscribe((val) => {
      x = val;
    });
    if (x == true) {
      this._router.navigate(['/buy']);
    } else {
      this._router.navigate(['/login',{id:'cart'}]);
    }
  }
  delete(data:any){
    for(var i=0;i<this.cart.length;i++){
      if(this.cart[i].id==data.id){
        console.log(data.id);
        this.cart.splice(i,1);
      }
    }
    console.log(this.cart);
    this.grandTotal = this.grandTotal-data.price;
    this.cartNum = this.cartNum-1;
    this.data.cartSize.next(this.cartNum);
  }

}
