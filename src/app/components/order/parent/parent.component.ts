import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/model/interfaces/icategory';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
categories:Icategory[];
catID:number;
  constructor() {
    this.categories = [
      {id:1, name:"BMW"},
      {id:2, name:"VOLVO"},
      {id:3, name:"Rolls Roys"},
    ];
   }

  ngOnInit(): void {
  }

}
