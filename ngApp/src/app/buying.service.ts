import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyingService {


  buyed = [];
  kupljeno = 0;

  buyedChange = new Subject<any>();

  constructor() { }


  buy(item) {
    this.buyed.push(item)
    this.kupljeno += item.price;
    
    this.buyedChange.next({
      buyed: this.buyed,
      kupljeno: this.kupljeno
    })
  }

  del(item) {
    this.buyed = this.buyed.filter(x => {
      return x.name != item.name
    })
    this.kupljeno -= item.price;

    this.buyedChange.next({
      buyed: this.buyed,
      kupljeno: this.kupljeno
    })
  }
}
