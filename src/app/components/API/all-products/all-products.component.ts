import { Component, OnInit } from '@angular/core';
import { IPro } from 'src/app/model/interfaces/ipro';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products: IPro[];
  constructor(private _ApiPrdServ: ProductService) { }

  ngOnInit(): void {
    this._ApiPrdServ.getAllProducts().subscribe((data) => {
      this.products = data;
    }, (err) => {
      console.log(err);

    })
  }

}
