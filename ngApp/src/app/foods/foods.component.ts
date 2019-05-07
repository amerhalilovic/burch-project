import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  foods = [{
    img:"https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2.jpg",
    name:"Hamburger",
    price: 5

  },
  {
    img:"https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2018/03/55cd28cae8ee78fe1e52ab1adc9eafff24c9af92.jpeg",
    name:"Pizza",
    price: 12
  },
  {
    img:"https://killabrewsaloon.com/wp-content/uploads/2015/03/salad.jpg",
    name:"Salad",
    price: 3
  },
  {
    img:"https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2.jpg",
    name:"Hamburger",
    price: 5

  },
  {
    img:"https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2018/03/55cd28cae8ee78fe1e52ab1adc9eafff24c9af92.jpeg",
    name:"Pizza",
    price: 12
  },
  {
    img:"https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2.jpg",
    name:"Hamburger",
    price: 5

  },
  {
    img:"https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2018/03/55cd28cae8ee78fe1e52ab1adc9eafff24c9af92.jpeg",
    name:"Pizza",
    price: 12
  },
  {
    img:"https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2018/03/55cd28cae8ee78fe1e52ab1adc9eafff24c9af92.jpeg",
    name:"Pizza",
    price: 12
  }
] ;

}
