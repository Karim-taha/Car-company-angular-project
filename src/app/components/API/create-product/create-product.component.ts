import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPro } from 'src/app/model/interfaces/ipro';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  prd: IPro;
  constructor(private _ApiPrdServ: ProductService, private _router: Router) {
    this.prd = {
      name: '',
      description: '',
      price: null,
      quantity: null
    }
  }

  ngOnInit(): void {

  }

  add() {
    this._ApiPrdServ.insertProduct(this.prd).subscribe((data) => {
      // console.log(data);
      this._router.navigateByUrl('/myproduct');
    }, (err) => {
      console.log(err);
    })
  }

}
