import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'ht-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input()
  public product: Product;// =  new Product('p001', 'Travel Bag', 'Used for travel purpose', 200, 'https://cdn.shopify.com/s/files/1/1882/4247/products/HWALK05_444_1000x1000.jpg?v=1571694919', true );

  constructor() { }

  ngOnInit(): void {
  }

}
