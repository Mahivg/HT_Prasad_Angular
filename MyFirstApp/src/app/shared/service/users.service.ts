import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MyUser } from "src/app/model/MyUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient){}

  getUsers(){
    return this.httpClient.get<MyUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: string) {
    return this.httpClient.get<MyUser>('https://jsonplaceholder.typicode.com/users/' + id );
  }

  addPosts() {
    let post = { title: 'foo',body: 'bar',userId: 1, };
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts', post);
  }

  deletePost(id: string) {
    return this.httpClient.delete('https://jsonplaceholder.typicode.com/posts/'+ id);
  }



}
