import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, Input, OnDestroy, DoCheck } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'ht-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy, DoCheck {

  // @ViewChild('userName')
  // userNameInput: ElementRef;

  // @ViewChild('password')
  // passwordInput: ElementRef;

  // @Output()
  // onLogin = new EventEmitter<boolean>();

  strs: string[]

  // @Input()
  users: User[];

  public loginFG: FormGroup;

  constructor(private appService: AppService, private router: Router) {
    this.users = this.appService.getUsers();
    console.log("Login component constructor called...");
  }

  ngOnInit(): void {
      console.log("Login Component Initialized.....");
      this.loginFG = new FormGroup({
        userNameFC: new FormControl('', [Validators.required]),
        passwordFC: new FormControl('', [Validators.required])
      });
  }

  ngOnDestroy() : void {
    console.log("Login Component Destroyed..");
  }

  ngDoCheck(): void {
    console.log("Login DO check....");
  }


  login() {
    // var userName = this.userNameInput.nativeElement.value;
    // var password = this.passwordInput.nativeElement.value;
    // console.log('Username : ' + userName);
    // console.log('Password : ' + password);

    var userCreds = this.loginFG.value;
    console.log('UserCred : ' + JSON.stringify(userCreds));

    var user = this.users.find( u => u.name == userCreds.userNameFC);
    if(user) {
      if(user.password == userCreds.passwordFC) {
        // alert("Logged in Successfully...");
        // this.onLogin.emit(true);
        this.appService.setUserLoginStatus(true);
        // Emitting user login status
        this.appService.userLoggedClient.next(true);
        this.router.navigateByUrl('/products');
      }
      else {
        // alert("Invalid Credentials...");
        // this.onLogin.emit(false);
        this.appService.setUserLoginStatus(false);
      }
    } else {
      this.appService.setUserLoginStatus(false);
      alert("Invalid Credentials...");
    }
  }
}
