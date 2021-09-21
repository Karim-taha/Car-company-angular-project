import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPro } from 'src/app/model/interfaces/ipro';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prd: IPro;
  constructor(private _activatedRoute: ActivatedRoute, private _ApiPrdSrerv: ProductService) { }

  ngOnInit(): void {
    let pid = this._activatedRoute.snapshot.params["pid"];
    this._ApiPrdSrerv.getProductByID(pid).subscribe((res) => {
      this.prd = res;
    }, (err) => {
      console.log(err);
    })

  }

}
