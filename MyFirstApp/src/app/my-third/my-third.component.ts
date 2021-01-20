import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-third',
  templateUrl: './my-third.component.html',
  styleUrls: ['./my-third.component.css']
})
export class MyThirdComponent implements OnInit {

  @Input('toMyChild')
  public myObj1: any;

  @Output()
  public myEvent = new EventEmitter<string>();

  constructor() {

   }

  ngOnInit(): void {
      console.log(this.myObj1);
  }

  sendMessage() {
    const msg = "Hi, I am from your child My-Third-Component";
    this.myEvent.emit(msg);

  }

}
