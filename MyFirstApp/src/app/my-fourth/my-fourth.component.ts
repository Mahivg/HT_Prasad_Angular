import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-fourth',
  templateUrl: './my-fourth.component.html',
  styleUrls: ['./my-fourth.component.css']
})
export class MyFourthComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

}
