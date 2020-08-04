import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  items = [
    {
      id: 1,
      img: '../../../assets/men1.png',
      price: 499,
      rating: 4,
      brand: 'Killer',
    },
    {
      id: 2,
      img: '../../../assets/men2.png',
      price: 399,
      rating: 3,
      brand: 'Peter-England',
    },
    {
      id: 3,
      img: '../../../assets/men3.png',
      price: 799,
      rating: 4,
      brand: 'Highlander',
    },
    {
      id: 4,
      img: '../../../assets/men4.png',
      price: 459,
      rating: 4,
      brand: 'Adidas',
    },
    {
      id: 5,
      img: '../../../assets/men5.png',
      price: 450,
      rating: 3,
      brand: 'Roadster',
    },
    {
      id: 6,
      img: '../../../assets/men6.png',
      price: 699,
      rating: 2,
      brand: 'U.S Polo',
    },
    {
      id: 7,
      img: '../../../assets/men7.png',
      price: 1299,
      rating: 3,
      brand: 'Wrogn',
    },
    {
      id: 8,
      img: '../../../assets/men8.png',
      price: 1499,
      rating: 5,
      brand: 'Arrow',
    },
    {
      id: 9,
      img: '../../../assets/men9.png',
      price: 499,
      rating: 4,
      brand: 'Blackberry',
    },
    {
      id: 10,
      img: '../../../assets/men10.png',
      price: 499,
      rating: 4,
      brand: 'Raymond',
    },
    {
      id: 11,
      img: '../../../assets/men11.png',
      price: 799,
      rating: 4,
      brand: 'Invictus',
    },
    {
      id: 12,
      img: '../../../assets/men12.png',
      price: 399,
      rating: 4,
      brand: 'RR',
    },
    {
      id: 13,
      img: '../../../assets/men13.png',
      price: 399,
      rating: 4,
      brand: 'Jack & Jones',
    },
    {
      id: 14,
      img: '../../../assets/men1.png',
      price: 499,
      rating: 4,
      brand: "Levi's",
    },
    {
      id: 15,
      img: '../../../assets/men2.png',
      price: 399,
      rating: 3,
      brand: 'T&M',
    },
    {
      id: 16,
      img: '../../../assets/men1.png',
      price: 499,
      rating: 4,
      brand: 'Killer',
    },
    {
      id: 17,
      img: '../../../assets/men2.png',
      price: 399,
      rating: 3,
      brand: 'Peter-England',
    },
    {
      id: 18,
      img: '../../../assets/men3.png',
      price: 799,
      rating: 4,
      brand: 'Highlander',
    },
    {
      id: 19,
      img: '../../../assets/men4.png',
      price: 459,
      rating: 4,
      brand: 'Adidas',
    },
    {
      id: 20,
      img: '../../../assets/men5.png',
      price: 450,
      rating: 3,
      brand: 'Roadster',
    },
    {
      id: 21,
      img: '../../../assets/men6.png',
      price: 699,
      rating: 2,
      brand: 'U.S Polo',
    },
    {
      id: 22,
      img: '../../../assets/men7.png',
      price: 1299,
      rating: 3,
      brand: 'Wrogn',
    },
    {
      id: 23,
      img: '../../../assets/men8.png',
      price: 1499,
      rating: 5,
      brand: 'Arrow',
    },
    {
      id: 24,
      img: '../../../assets/men9.png',
      price: 499,
      rating: 4,
      brand: 'Blackberry',
    },
    {
      id: 25,
      img: '../../../assets/men10.png',
      price: 499,
      rating: 4,
      brand: 'Raymond',
    },
    {
      id: 26,
      img: '../../../assets/men11.png',
      price: 799,
      rating: 4,
      brand: 'Invictus',
    },
    {
      id: 27,
      img: '../../../assets/men12.png',
      price: 399,
      rating: 4,
      brand: 'RR',
    },
    {
      id: 28,
      img: '../../../assets/men13.png',
      price: 399,
      rating: 4,
      brand: 'Jack & Jones',
    },
    {
      id: 29,
      img: '../../../assets/men1.png',
      price: 499,
      rating: 4,
      brand: "Levi's",
    },
    {
      id: 30,
      img: '../../../assets/men2.png',
      price: 399,
      rating: 3,
      brand: 'T&M',
    },
    {
      id: 31,
      img: '../../../assets/men1.png',
      price: 499,
      rating: 4,
      brand: 'Killer',
    },
    {
      id: 32,
      img: '../../../assets/men2.png',
      price: 399,
      rating: 3,
      brand: 'Peter-England',
    },
    {
      id: 33,
      img: '../../../assets/men3.png',
      price: 799,
      rating: 4,
      brand: 'Highlander',
    },
    {
      id: 34,
      img: '../../../assets/men4.png',
      price: 459,
      rating: 4,
      brand: 'Adidas',
    },
    {
      id: 35,
      img: '../../../assets/men5.png',
      price: 450,
      rating: 3,
      brand: 'Roadster',
    },
    {
      id: 36,
      img: '../../../assets/men6.png',
      price: 699,
      rating: 2,
      brand: 'U.S Polo',
    },
    {
      id: 37,
      img: '../../../assets/men7.png',
      price: 1299,
      rating: 3,
      brand: 'Wrogn',
    },
    {
      id: 38,
      img: '../../../assets/men8.png',
      price: 1499,
      rating: 5,
      brand: 'Arrow',
    },
    {
      id: 39,
      img: '../../../assets/men9.png',
      price: 499,
      rating: 4,
      brand: 'Blackberry',
    },
    {
      id: 40,
      img: '../../../assets/men10.png',
      price: 499,
      rating: 4,
      brand: 'Raymond',
    },
    {
      id: 41,
      img: '../../../assets/men11.png',
      price: 799,
      rating: 4,
      brand: 'Invictus',
    },
    {
      id: 42,
      img: '../../../assets/men12.png',
      price: 399,
      rating: 4,
      brand: 'RR',
    },
    {
      id: 43,
      img: '../../../assets/men13.png',
      price: 399,
      rating: 4,
      brand: 'Jack & Jones',
    },
    {
      id: 44,
      img: '../../../assets/men1.png',
      price: 499,
      rating: 4,
      brand: "Levi's",
    },
    {
      id: 45,
      img: '../../../assets/men2.png',
      price: 399,
      rating: 3,
      brand: 'T&M',
    },
  ];

  cart: { img: string; price: number; rating: number; brand: string }[] = [];

  cartSize = new BehaviorSubject(0);
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
  clearCart() {
    this.cart = null;
    this.cartSize.next(0);
  }
  getUserData() {
    return this.userData;
  }
}
