import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyTestComponent } from './my-first/my-test.component';
import { MySecondComponent } from './my-second/my-second.component';
import { MyThirdComponent } from './my-third/my-third.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
