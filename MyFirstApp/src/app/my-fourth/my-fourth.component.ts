import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MyUser } from '../model/MyUser';
import { UserService } from '../shared/service/users.service';

@Component({
  selector: 'app-my-fourth',
  templateUrl: './my-fourth.component.html',
  styleUrls: ['./my-fourth.component.css']
})
export class MyFourthComponent implements OnInit {

  @ViewChild('userId')
  txtUserId: ElementRef;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  public getUsers() {

   this.userService.getUsers().subscribe(resData => {
      console.log(resData);
    }, err => {
      console.log(err);
      this.router.navigateByUrl('error');
    }, () => { console.log('get users completed');});

  }

  public getUserById() {
    let userId = this.txtUserId.nativeElement.value;
    this.userService.getUserById(userId).subscribe(resData => {
      console.log(resData);
    }, err => {
      console.log(err);
      this.router.navigateByUrl('error');
    }, () => { console.log('Get user by id completed');});
  }

  public addPosts() {
    this.userService.addPosts().subscribe(resData => {
      console.log(resData);
    }, err => {
      console.log(err);
      this.router.navigateByUrl('error');
    }, () => { console.log('add posts completed');})
  }

  public deteletPost() {
    let postId = this.txtUserId.nativeElement.value;
    this.userService.deletePost(postId).subscribe(resData => {
      console.log(resData);
    }, err => {
      console.log(err);
      this.router.navigateByUrl('error');
    }, () => { console.log('Delete posts completed');});

  }

}
