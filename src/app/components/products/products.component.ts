import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/model/interfaces/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Iproduct[];
  constructor() {
    this.products = [
      {id:1, name:"BMW", price:10000, quantity:20},
      {id:2, name:"Volvo", price:10000, quantity:0},
      {id:3, name:"Rolls Roys", price:10000, quantity:20},
      {id:4, name:"BMW", price:10000, quantity:20},
      {id:5, name:"Volvo", price:10000, quantity:1},
      {id:6, name:"Rolls Roys", price:10000, quantity:20}

  ];
   }

  ngOnInit(): void {
  }

}
