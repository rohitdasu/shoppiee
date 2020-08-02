import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-pic',
  templateUrl: './one-pic.component.html',
  styleUrls: ['./one-pic.component.css']
})
export class OnePicComponent implements OnInit {
  imgUrl:string = '../../../assets/oneimage.png';
  constructor() { }

  ngOnInit(): void {
  }

}
