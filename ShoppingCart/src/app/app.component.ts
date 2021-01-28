import { Component } from '@angular/core';
import { Product } from './model/Product';
import { User } from './model/User';

@Component({
  selector: 'ht-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingCart';
  isUserLoggedIn = false;

  onUserLoginStatusChange(loginStatus: boolean) {
    this.isUserLoggedIn = loginStatus;
  }

}
