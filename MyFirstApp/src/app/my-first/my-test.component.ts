import { Component, OnInit } from "@angular/core";
import { User } from "../model/User";
import { MyFirstService } from "../shared/my-first.service";

@Component({
  selector: 'app-my-first',
  templateUrl: "./my-test.component.html",
  styleUrls: ["./my-test.component.css"],
  // providers: [MyFirstService]
})
export class MyTestComponent implements OnInit {

    // myFirstService: MyFirstService;
    users: User[];

    //used for dependency injection
    constructor(public myFirstService: MyFirstService) {}

    ngOnInit() {
      // this.myFirstService = new MyFirstService();
      this.users = this.myFirstService.getUsers();
      console.log("From First component : Before Push...");
      console.log(this.users);
      this.users.push(new User('test4', 'test1515'));
      console.log("From First component : After Push...");
      console.log(this.users);
    }




}
