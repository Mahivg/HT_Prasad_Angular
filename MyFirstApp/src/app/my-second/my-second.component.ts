import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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


  public empFormGroup: FormGroup;

  constructor(public mySecondService: MyFirstService) { }

  ngOnInit(): void {
    // this.myFirstService = new MyFirstService();
    this.users = this.mySecondService.getUsers();
    console.log("From Second component...");
    console.log(this.users);

    this.empFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl(),
      designation: new FormControl(),
      email: new FormControl('', [Validators.email]),
      address: new FormGroup({
        line1 : new FormControl(''),
        line2: new FormControl('')
      })
    });

  }

  callFromChild(childEvent: string) {
    console.log(childEvent);
    this.msg = childEvent;
  }

 public onFormSubmit() {
    console.log(this.empFormGroup.value);

    const myEmp = { name: "Magesh2", age: 188, designation: "SSEEE", email: "vgmagesh5@gmail.com"};
    // const myEmp = { name: "Magesh2", age: 188, designation: "SSEEE", email: "vgmagesh5@gmail.com", address: { line1 : 'line1', line2: 'line2'}};

    // this.empFormGroup.setValue(myEmp);
    this.empFormGroup.patchValue(myEmp);
    // this.empFormGroup.setValue(null);
  }

}
