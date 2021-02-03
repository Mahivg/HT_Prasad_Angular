import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'ht-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // @Input()
  public products: Product[];

  public productSelected = false;

  public selectedProduct: Product;

  constructor(public appService: AppService, private router: Router) {
    this.products = this.appService.getProducts();
  }

  ngOnInit(): void {
  }

  onProductSelected(prod: Product) {
    // this.selectedProduct = prod;
    // console.log(this.selectedProduct);
    // this.productSelected = true;

    // this.router.navigateByUrl('products/' + prod.id);
    this.router.navigate(['products', prod.id]);
  }
  backToList() {
    this.productSelected = false;
  }

}
