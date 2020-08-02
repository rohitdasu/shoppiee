import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-pic',
  templateUrl: './two-pic.component.html',
  styleUrls: ['./two-pic.component.css']
})
export class TwoPicComponent implements OnInit {
  imgUrl1:string = '../../../assets/img2of1.png'
  imgUrl2:string = '../../../assets/img3of1.png'
  constructor() { }

  ngOnInit(): void {
  }

}
