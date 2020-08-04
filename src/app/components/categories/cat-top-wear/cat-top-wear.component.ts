import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DataService } from '../../../shared/services/data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cat-top-wear',
  templateUrl: './cat-top-wear.component.html',
  styleUrls: ['./cat-top-wear.component.css'],
})
export class CatTopWearComponent implements OnInit {
  items: any;
  pageSlice: any;
  pageSize: number;
  dataSource: any;
  constructor(private data: DataService, private _router: Router,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.items = this.data.getItems();
    this.pageSlice = this.items.slice(0, 10);
  }
  getData(event?: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.items.length) {
      endIndex = this.items.length;
    }
    this.pageSlice = this.items.slice(startIndex, endIndex);
  }
  getDataByPriceLowtoHigh() {
    var byPrice = this.pageSlice.slice(0);
    byPrice.sort(function (a, b) {
      return a.price - b.price;
    });
    this.pageSlice = byPrice;
  }
  getDataByPriceHightoLow() {
    var byPrice = this.pageSlice.slice(0);
    byPrice.sort(function (a, b) {
      return b.price - a.price;
    });
    this.pageSlice = byPrice;
  }

  getDataByRatingLowtoHigh() {
    var byPrice = this.pageSlice.slice(0);
    byPrice.sort(function (a, b) {
      return a.rating - b.rating;
    });
    this.pageSlice = byPrice;
  }
  getDataByRatingHightoLow() {
    var byPrice = this.pageSlice.slice(0);
    byPrice.sort(function (a, b) {
      return b.rating - a.rating;
    });
    this.pageSlice = byPrice;
  }
  gotoViewItem(x: any) {
    this._router.navigate(['view-item', x]);
  }
  addToCart(x) {
    var z = {
      id:x.id,
      img: x.img,
      price: x.price,
      rating: x.rating,
      brand: x.brand,
      size: 'M',
      Quantity: 1,
    };
    this.data.addToCart(z);
    this.openSnackBar('Item added to cart');
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 3000,
    });
  }
}
