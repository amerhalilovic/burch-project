import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyingService {


  buyed = []
  kupljeno = 0;
  constructor() { }




  buy(item) {

    this.buyed.push(item)
    this.kupljeno += item.price;
    console.log(item)
    console.log(item.name)
    console.log(item.price)
    console.log("value" + this.kupljeno)
    console.log(this.buyed)
  }

  del(item) {
    if (this.buyed != []) {
      this.buyed.pop()
    } else {
      console.log("Prazno")
    }
    this.kupljeno -= item.price;
  }
}
