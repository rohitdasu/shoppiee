import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-pic',
  templateUrl: './three-pic.component.html',
  styleUrls: ['./three-pic.component.css']
})
export class ThreePicComponent implements OnInit {
  imgUrl1:string = '../../../assets/img3of1.png';
  imgUrl2:string = '../../../assets/img3of2.png';
  imgUrl3:string = '../../../assets/img3of3.png';
  constructor() { }

  ngOnInit(): void {
  }

}
