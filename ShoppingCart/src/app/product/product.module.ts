import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AuthGaurd } from "../shared/auth.gaurd";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";

const productRoutes : Routes = [
  {
  path: 'products',
  component: ProductListComponent,
  canActivate: [AuthGaurd]
 },
 {
  path: 'products/:id',
  component: ProductDetailComponent,
  canActivate: [AuthGaurd]
 }
]

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(productRoutes)
  ]
})
export class ProductsModule { }
