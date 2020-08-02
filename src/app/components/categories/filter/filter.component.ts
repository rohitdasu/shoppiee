import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  panelOpenState: boolean;
  first: boolean;
  third: boolean;
  second: boolean;
  firstP: boolean;
  firstR: boolean;
  secondP: boolean;
  secondR: boolean;

  @Output() getDataByPriceLowtoHigh = new EventEmitter();
  @Output() getDataByPriceHightoLow = new EventEmitter();
  @Output() getDataByRatingLowtoHigh = new EventEmitter();
  @Output() getDataByRatingHightoLow = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  sortBySelect(x: string) {
    if (x === 'LH') {
      this.firstP = true;
      this.secondP = false;
      this.getDataByPriceLowtoHigh.emit();
    }
    if (x === 'HL') {
      this.firstP = false;
      this.secondP = true;
      this.getDataByPriceHightoLow.emit();
    }
  }
  sortBySelectRating(x: string) {
    if (x === 'LH') {
      this.firstR = true;
      this.secondR = false;
      this.getDataByRatingLowtoHigh.emit();
    }
    if (x === 'HL') {
      this.firstR = false;
      this.secondR = true;
      this.getDataByRatingHightoLow.emit();
    }
  }
}
