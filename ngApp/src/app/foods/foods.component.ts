import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { BuyingService } from '../buying.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {


  foods = []

  constructor(private _foodService: FoodService,
    private _buyingService: BuyingService) { }

  ngOnInit() {
    this._foodService.getFood()
      .subscribe(
        res => this.foods = res,
        err => console.log(err)
      )

    this._buyingService.buy(this.foods)
    this._buyingService.del(this.foods)
  }



}
