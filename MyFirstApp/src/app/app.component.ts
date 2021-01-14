import { Component, ElementRef, ViewChild } from '@angular/core';

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
  public a = 10;

  @ViewChild('myText')
  myTextElem: ElementRef;

  public onH4Click(event: any) {
    console.log("h4 Clicked..");
    console.log(event);
    console.log(event.target);
    console.log(event.target.textContent);
  }

  onTextSubmit(text) {
    console.log(text);
    console.log(text.value);
    console.log(this.myTextElem.nativeElement.value);
  }

}
