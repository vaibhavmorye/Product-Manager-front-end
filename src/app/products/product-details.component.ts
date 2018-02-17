import { Component, OnInit } from '@angular/core';
import { IProduct } from "../../api/products/product";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: string = 'Product details';
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router:Router) { }

  onBack():void{
    this._router.navigate(['/products']);
  }
  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `${id}`;
    this.product = {
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }

  }
}


