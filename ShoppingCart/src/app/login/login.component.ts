import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'ht-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('userName')
  userNameInput: ElementRef;

  @ViewChild('password')
  passwordInput: ElementRef;

  strs: string[]

  users: User[] = [
    { name: 'Test', password: 'test1212' },
    { name: 'Test1', password: 'test1313' },
    { name: 'Test2', password: 'test1414' }
  ];

  constructor() { }

  ngOnInit(): void {
  }


  login() {
    var userName = this.userNameInput.nativeElement.value;
    var password = this.passwordInput.nativeElement.value;
    console.log('Username : ' + userName);
    console.log('Password : ' + password);

    var user = this.users.find( u => u.name == userName);
    if(user) {
      if(user.password == password) {
        alert("Logged in Successfully...");
      }
      else {
        alert("Invalid Credentials...")
      }
    } else {
      alert("Invalid Credentials...")
    }
  }
}
