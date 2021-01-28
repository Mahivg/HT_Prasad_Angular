import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ht-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output()
  onLogout = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    this.onLogout.emit(false);
  }

}
