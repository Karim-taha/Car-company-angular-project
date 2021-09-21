import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Iproduct } from 'src/app/model/interfaces/iproduct';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
@Input() selectedCatID:number;
products: Iproduct[];
total:number;
  constructor() {
    this.total = 0;
    console.log(` constructor ${this.selectedCatID}`);

    this.products = [
      {id:1, name:"BMW", price:5000, quantity:0, catID:1},
      {id:2, name:"BMW", price:5000, quantity:20, catID:1},
      {id:3, name:"BMW", price:5000, quantity:20, catID:1},
      {id:4, name:"BMW", price:5000, quantity:1, catID:1},
      {id:5, name:"BMW", price:5000, quantity:20, catID:1},
      {id:6, name:"Volvo", price:8000, quantity:15, catID:2},
      {id:7, name:"Volvo", price:8000, quantity:1, catID:2},
      {id:8, name:"Volvo", price:8000, quantity:0, catID:2},
      {id:9, name:"Rolls Roys", price:2000000, quantity:1, catID:3},
  ];
  }

  ngOnChanges(): void {
    console.log(` ngOnChanges ${this.selectedCatID}`);
    console.log(this.getProductByCatId());
  }

  ngOnInit(): void {
    console.log(` ngOnInit ${this.selectedCatID}`);
  }

  getProductByCatId():Iproduct[]{
    return this.products.filter((prd)=>{
      return prd.catID==this.selectedCatID;
    })
  }

  TotalPrice(price,count){
    this.total += price*count;
    console.log(this.total);

  }

}
