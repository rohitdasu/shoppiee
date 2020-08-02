import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  items = [
    {
      img: '../../../assets/men1.png',
      price: 499,
      rating: 4,
      brand: 'Killer',
    },
    {
      img: '../../../assets/men2.png',
      price: 399,
      rating: 3,
      brand: 'Peter-England',
    },
    {
      img: '../../../assets/men3.png',
      price: 799,
      rating: 4,
      brand: 'Highlander',
    },
    {
      img: '../../../assets/men4.png',
      price: 459,
      rating: 4,
      brand: 'Adidas',
    },
    {
      img: '../../../assets/men5.png',
      price: 450,
      rating: 3,
      brand: 'Roadster',
    },
    {
      img: '../../../assets/men6.png',
      price: 699,
      rating: 2,
      brand: 'U.S Polo',
    },
    {
      img: '../../../assets/men7.png',
      price: 1299,
      rating: 3,
      brand: 'Wrogn',
    },
    {
      img: '../../../assets/men8.png',
      price: 1499,
      rating: 5,
      brand: 'Arrow',
    },
    {
      img: '../../../assets/men9.png',
      price: 499,
      rating: 4,
      brand: 'Blackberry',
    },
    {
      img: '../../../assets/men10.png',
      price: 499,
      rating: 4,
      brand: 'Raymond',
    },
    {
      img: '../../../assets/men11.png',
      price: 799,
      rating: 4,
      brand: 'Invictus',
    },
    {
      img: '../../../assets/men12.png',
      price: 399,
      rating: 4,
      brand: 'RR',
    },
    {
      img: '../../../assets/men13.png',
      price: 399,
      rating: 4,
      brand: 'Jack & Jones',
    },
    {
      img: '../../../assets/men1.png',
      price: 499,
      rating: 4,
      brand: "Levi's",
    },
    {
      img: '../../../assets/men2.png',
      price: 399,
      rating: 3,
      brand: 'T&M',
    },
    {
      img: '../../../assets/men1.png',
      price: 499,
      rating: 4,
      brand: 'Killer',
    },
    {
      img: '../../../assets/men2.png',
      price: 399,
      rating: 3,
      brand: 'Peter-England',
    },
    {
      img: '../../../assets/men3.png',
      price: 799,
      rating: 4,
      brand: 'Highlander',
    },
    {
      img: '../../../assets/men4.png',
      price: 459,
      rating: 4,
      brand: 'Adidas',
    },
    {
      img: '../../../assets/men5.png',
      price: 450,
      rating: 3,
      brand: 'Roadster',
    },
    {
      img: '../../../assets/men6.png',
      price: 699,
      rating: 2,
      brand: 'U.S Polo',
    },
    {
      img: '../../../assets/men7.png',
      price: 1299,
      rating: 3,
      brand: 'Wrogn',
    },
    {
      img: '../../../assets/men8.png',
      price: 1499,
      rating: 5,
      brand: 'Arrow',
    },
    {
      img: '../../../assets/men9.png',
      price: 499,
      rating: 4,
      brand: 'Blackberry',
    },
    {
      img: '../../../assets/men10.png',
      price: 499,
      rating: 4,
      brand: 'Raymond',
    },
    {
      img: '../../../assets/men11.png',
      price: 799,
      rating: 4,
      brand: 'Invictus',
    },
    {
      img: '../../../assets/men12.png',
      price: 399,
      rating: 4,
      brand: 'RR',
    },
    {
      img: '../../../assets/men13.png',
      price: 399,
      rating: 4,
      brand: 'Jack & Jones',
    },
    {
      img: '../../../assets/men1.png',
      price: 499,
      rating: 4,
      brand: "Levi's",
    },
    {
      img: '../../../assets/men2.png',
      price: 399,
      rating: 3,
      brand: 'T&M',
    },
    {
      img: '../../../assets/men1.png',
      price: 499,
      rating: 4,
      brand: 'Killer',
    },
    {
      img: '../../../assets/men2.png',
      price: 399,
      rating: 3,
      brand: 'Peter-England',
    },
    {
      img: '../../../assets/men3.png',
      price: 799,
      rating: 4,
      brand: 'Highlander',
    },
    {
      img: '../../../assets/men4.png',
      price: 459,
      rating: 4,
      brand: 'Adidas',
    },
    {
      img: '../../../assets/men5.png',
      price: 450,
      rating: 3,
      brand: 'Roadster',
    },
    {
      img: '../../../assets/men6.png',
      price: 699,
      rating: 2,
      brand: 'U.S Polo',
    },
    {
      img: '../../../assets/men7.png',
      price: 1299,
      rating: 3,
      brand: 'Wrogn',
    },
    {
      img: '../../../assets/men8.png',
      price: 1499,
      rating: 5,
      brand: 'Arrow',
    },
    {
      img: '../../../assets/men9.png',
      price: 499,
      rating: 4,
      brand: 'Blackberry',
    },
    {
      img: '../../../assets/men10.png',
      price: 499,
      rating: 4,
      brand: 'Raymond',
    },
    {
      img: '../../../assets/men11.png',
      price: 799,
      rating: 4,
      brand: 'Invictus',
    },
    {
      img: '../../../assets/men12.png',
      price: 399,
      rating: 4,
      brand: 'RR',
    },
    {
      img: '../../../assets/men13.png',
      price: 399,
      rating: 4,
      brand: 'Jack & Jones',
    },
    {
      img: '../../../assets/men1.png',
      price: 499,
      rating: 4,
      brand: "Levi's",
    },
    {
      img: '../../../assets/men2.png',
      price: 399,
      rating: 3,
      brand: 'T&M',
    },
  ];

  cart: { img: string; price: number; rating: number; brand: string }[] = [];

  private cartSize = new BehaviorSubject(0);
  currentCartSize = this.cartSize.asObservable();

  userData = {
    username: 'rohit',
    password: 'Rohit123!@#',
  };
  constructor() {}

  getItems() {
    return this.items;
  }
  addToCart(x: any) {
    this.cart.push(x);
    this.cartSize.next(this.cart.length);
  }
  getCartData() {
    return this.cart;
  }
  clearCart(){
    this.cart = null;
    this.cartSize.next(0);
  }
  getUserData() {
    return this.userData;
  }
}
