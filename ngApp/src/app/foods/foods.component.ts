import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  
foods = []
  
  constructor(private _foodService:FoodService) { }

  ngOnInit() {
    this._foodService.getFood()
    .subscribe(
      res=>this.foods=res,
      err => console.log(err)
    )
  }

  
}
