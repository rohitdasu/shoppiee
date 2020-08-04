import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css'],
})
export class ViewitemComponent implements OnInit {
  quantity: number = 1;
  data: any;
  private sub: any;
  size: string;
  constructor(
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.data = params;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addToCart() {
    if (this.size == '' || this.size == undefined) {
      alert('please choose size');
      return;
    }
    var x = {
      id:this.data.id,
      img: this.data.img,
      price: this.data.price,
      rating: this.data.rating,
      brand: this.data.brand,
      size: this.size,
      Quantity: this.quantity,
    };
    this.dataService.addToCart(x);
    this.openSnackBar('Item added to cart');
  }

  addSize(x: string) {
    if (x === 'XS') {
      this.size = 'XS';
    } else if (x === 'S') {
      this.size = 'S';
    } else if (x === 'M') {
      this.size = 'M';
    } else {
      this.size = 'L';
    }
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 3000,
    });
  }
}
