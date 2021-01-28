import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, Input, OnDestroy, DoCheck } from '@angular/core';
import { User } from '../model/User';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'ht-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy, DoCheck {

  @ViewChild('userName')
  userNameInput: ElementRef;

  @ViewChild('password')
  passwordInput: ElementRef;

  @Output()
  onLogin = new EventEmitter<boolean>();

  strs: string[]

  // @Input()
  users: User[];

  constructor(public appService: AppService) {
    this.users = this.appService.getUsers();
    console.log("Login component constructor called...");
  }

  ngOnInit(): void {
      console.log("Login Component Initialized.....");
  }

  ngOnDestroy() : void {
    console.log("Login Component Destroyed..");
  }

  ngDoCheck(): void {
    console.log("Login DO check....");
  }


  login() {
    var userName = this.userNameInput.nativeElement.value;
    var password = this.passwordInput.nativeElement.value;
    console.log('Username : ' + userName);
    console.log('Password : ' + password);

    var user = this.users.find( u => u.name == userName);
    if(user) {
      if(user.password == password) {
        // alert("Logged in Successfully...");
        this.onLogin.emit(true);
      }
      else {
        // alert("Invalid Credentials...");
        this.onLogin.emit(false);
      }
    } else {
      alert("Invalid Credentials...");
    }
  }
}
