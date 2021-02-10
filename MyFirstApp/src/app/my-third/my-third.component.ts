import { Component, Input, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-third',
  templateUrl: './my-third.component.html',
  styleUrls: ['./my-third.component.css']
})
export class MyThirdComponent implements OnInit, OnDestroy {

  @Input('toMyChild')
  public myObj1: any;

  @Output()
  public myEvent = new EventEmitter<string>();

  public myString: string = "1234567890";

  public todayDate: Date = new Date();

  public salary: number = 25000;

  public myObj  = { name: 'Magesh', age: 13 };

  constructor() {  }

  ngOnInit(): void {
      console.log(this.myObj1);
  }

  sendMessage() {
    const msg = "Hi, I am from your child My-Third-Component";
    this.myEvent.emit(msg);

  }

  ngOnDestroy() {

  }

}
