import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyTestComponent } from './my-first/my-test.component';
import { MySecondComponent } from './my-second/my-second.component';
import { MyThirdComponent } from './my-third/my-third.component';
import { MyFirstService } from './shared/my-first.service';

@NgModule({
  declarations: [
    AppComponent,
    MyTestComponent,
    MySecondComponent,
    MyThirdComponent
  ],
  imports: [
    BrowserModule
  ],
  // providers: [MyFirstService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
