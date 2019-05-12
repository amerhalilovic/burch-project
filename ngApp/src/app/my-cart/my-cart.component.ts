import { Component, OnInit } from '@angular/core';
import { BuyingService } from '../buying.service';
@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  korpa = []

  constructor(private _buyingService: BuyingService) {
    this.korpa = _buyingService.buyed
    _buyingService.buyedChange.subscribe(val => {
      this.korpa = val.buyed
    })
  }

  ngOnInit() {}

  remove(item){
    this._buyingService.del(item)
  }

}
