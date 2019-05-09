import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {


  drinks = []
  constructor(private _drinkService: DrinkService,
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

  korpa = [];
  dodaj(drinks) {
    this.korpa.push(drinks);
    console.log(drinks);
    console.log(this.korpa);
    alert('▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n' + "                   Article added in the cart" + '\n▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n');

  }


}
