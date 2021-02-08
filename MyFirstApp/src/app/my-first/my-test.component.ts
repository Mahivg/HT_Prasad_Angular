import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
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

    // @ViewChild('empForm') empForm: NgForm;

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

    public onFormSubmit(empForm: NgForm) {
      console.log(empForm);
      console.log(empForm.value);
    }




}
