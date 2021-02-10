import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyTestComponent } from './my-first/my-test.component';
import { MySecondComponent } from './my-second/my-second.component';
import { MyThirdComponent } from './my-third/my-third.component';
import { MyFirstService } from './shared/my-first.service';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyHoverDirective } from './shared/directives/myHover.directive';
import { MyLoopDirective } from './shared/directives/my-loop.directive';
import { LimitToPipe } from './shared/pipes/limitTo.pipe';

import { HttpClientModule} from '@angular/common/http';
import { MyFourthComponent } from './my-fourth/my-fourth.component';


const appRoutes: Routes = [
  {
    path: 'first',
    //localhost:4200/first
    component: MyTestComponent
  },
  {
    path: 'second',
    component: MySecondComponent
  },
  {
    path: 'third',
    component: MyThirdComponent
  },
  {
    path: 'fourth',
    component: MyFourthComponent
  },
  {
    path: '', // default route
    redirectTo: 'first',
    pathMatch: 'full'
  },
  {
    path: '**', // wild route
    component: PageNotFoundComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    MyTestComponent,
    MySecondComponent,
    MyThirdComponent,
    PageNotFoundComponent,
    MyHoverDirective,
    MyLoopDirective,
    LimitToPipe,
    MyFourthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // providers: [MyFirstService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
