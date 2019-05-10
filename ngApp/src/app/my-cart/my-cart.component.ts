import { Component, OnInit } from '@angular/core';
import { BuyingService } from '../buying.service';
@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  korpa = this._buyingService.buyed
  constructor(private _buyingService: BuyingService) { }

  ngOnInit() {
   
  }

  remove = this._buyingService.del(this.korpa)

}
