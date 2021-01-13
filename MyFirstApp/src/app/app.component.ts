import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // selector: '.app-root',
  // selector: '[app-root]',
  // template: `<h1> test template </h1>
  //       <div> Test</div> `,
  templateUrl: './app.component.html',
  // styles: [
  //   `h1 {
  //     color: red;
  //   }`,

  // ],

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';
}
