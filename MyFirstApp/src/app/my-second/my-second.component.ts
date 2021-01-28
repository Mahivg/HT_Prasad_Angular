import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { MyFirstService } from '../shared/my-first.service';

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.css']
})
export class MySecondComponent implements OnInit {

  public myObj = { name : "test", age: 10 };

  public msg: string;

  // myFirstService: MyFirstService;
  users: User[];

  constructor(public mySecondService: MyFirstService) { }

  ngOnInit(): void {
    // this.myFirstService = new MyFirstService();
    this.users = this.mySecondService.getUsers();
    console.log("From Second component...");
    console.log(this.users);
  }

  callFromChild(childEvent: string) {
    console.log(childEvent);
    this.msg = childEvent;
  }

}
