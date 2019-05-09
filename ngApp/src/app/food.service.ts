import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodService {


  private _foodUrl = "http://localhost:3000/api/foods"

  constructor(private http: HttpClient) { }


  getFood() {
    return this.http.get<any>(this._foodUrl)
  }

}


