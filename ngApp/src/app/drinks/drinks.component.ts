import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BuyingService } from '../buying.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {


  drinks = []

  constructor(private _drinkService: DrinkService,
    private _buyingService: BuyingService,
    private _router: Router) { }

  ngOnInit() {
    this._drinkService.getDrink()
      .subscribe(
        res => this.drinks = res,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(['login'])
            }
          }
        }
      )
  }

  dodaj(drink) {
    this._buyingService.buy(drink)
    alert('▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n' + "                   Article added in the cart" + '\n▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n');
  }


}
