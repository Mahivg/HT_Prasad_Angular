import { Component } from '@angular/core';
import { Product } from './model/Product';

@Component({
  selector: 'ht-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingCart';

  public products: Product[] = [
    new Product('p001', 'Travel Bag', 'Used for travel purpose', 200, 'https://cdn.shopify.com/s/files/1/1882/4247/products/HWALK05_444_1000x1000.jpg?v=1571694919', true ),
    new Product('p002', 'Sun glass', 'Used in outdoor', 250, 'https://i01.appmifile.com/webfile/globalimg/in/cms/6A13C3D4-5290-53BC-8953-7E5CDCD7B80C.jpg', true ),
    new Product('p003', 'Formal shirt', 'used to wear it in office', 270, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZPOO-TlWIHfC8f0wzr4vgfbBcXXqCmDGlg&usqp=CAU', true ),
    new Product('p004', 'Jeans Pant', 'casual outfit', 300, 'https://cdn.britannica.com/74/190774-050-52CE5745/jeans-denim-pants-clothing.jpg', true ),
    new Product('p005', 'Casual Cap', 'Cap for playing games', 200, 'https://images-na.ssl-images-amazon.com/images/I/71k5Cr%2B5PIL._AC_UX385_.jpg', true ),
    new Product('p006', 'Treking stick', 'used to climb hills', 800, 'https://images-na.ssl-images-amazon.com/images/I/31vbiz3GViL.jpg', true )
  ];
}
