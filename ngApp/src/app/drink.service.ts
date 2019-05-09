import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DrinkService {


  private _drinkUrl = "http://localhost:3000/api/drinks"
  constructor(private http : HttpClient) { }

  getDrink() {
    return this.http.get<any>(this._drinkUrl)
  }

}
