import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.css']
})
export class MySecondComponent implements OnInit {

  public myObj = { name : "test", age: 10 };

  public msg: string;

  constructor() { }

  ngOnInit(): void {
  }

  callFromChild(childEvent: string) {
    console.log(childEvent);
    this.msg = childEvent;
  }

}
