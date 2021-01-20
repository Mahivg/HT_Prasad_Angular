import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'ht-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  public products: Product[];

  public productSelected = false;

  public selectedProduct: Product;

  constructor() { }

  ngOnInit(): void {
  }

  onProductSelected(prod: Product) {
    this.selectedProduct = prod;
    console.log(this.selectedProduct);
    this.productSelected = true;
  }
  backToList() {
    this.productSelected = false;
  }

}
