import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  korpa = [];
  dodaj(drinks){
    this.korpa.push(drinks);
    console.log(drinks);
    console.log(this.korpa);
    alert( '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n'+ "                   Article added in the cart" + '\n▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n' ); 

  } 

  drinks = [{
    img:"https://5.imimg.com/data5/GD/GM/MY-764091/ice-tea-500x500.png",
    name:"Ice Tea",
    price: 2

  },
  {
    img:"https://cdn0.woolworths.media/content/wowproductimages/large/032731.jpg",
    name:"Coca Cola",
    price: 2.5
  },
  {
    img:"https://cdn0.woolworths.media/content/wowproductimages/large/327603.jpg",
    name:"Red Bull",
    price: 5
  },{
    img:"https://5.imimg.com/data5/GD/GM/MY-764091/ice-tea-500x500.png",
    name:"Ice Tea",
    price: 2

  },
  {
    img:"https://cdn0.woolworths.media/content/wowproductimages/large/032731.jpg",
    name:"Coca Cola",
    price: 2.5
  },
  {
    img:"https://cdn0.woolworths.media/content/wowproductimages/large/327603.jpg",
    name:"Red Bull",
    price: 5
  },{
    img:"https://5.imimg.com/data5/GD/GM/MY-764091/ice-tea-500x500.png",
    name:"Ice Tea",
    price: 2

  },
  {
    img:"https://cdn0.woolworths.media/content/wowproductimages/large/032731.jpg",
    name:"Coca Cola",
    price: 2.5
  }
] ;
}
