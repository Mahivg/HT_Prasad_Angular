import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'ht-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // @Output()
  // onLogout = new EventEmitter<boolean>();

  isUserLoggedIn: boolean;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {



    this.appService.userLoggedServer.subscribe(ulData => {
      console.log("Navbar userLoggedServer subscribe called...");
      console.log(false);
      this.isUserLoggedIn = ulData;
    }, err => { console.log(err);}, () => { console.log("Complete function...")}) // It is listening becuase subscribe registered
  }

  logout() {
    // this.onLogout.emit(false);
    this.isUserLoggedIn = false;
    this.appService.setUserLoginStatus(false);
    this.router.navigateByUrl('/login');
  }

}
