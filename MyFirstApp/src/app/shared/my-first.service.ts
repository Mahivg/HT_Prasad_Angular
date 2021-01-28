import { Injectable } from "@angular/core";
import { User } from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

    users: User[] = [
      { name: 'Test', password: 'test1212' },
      { name: 'Test1', password: 'test1313' },
      { name: 'Test2', password: 'test1414' }
    ];

    public getUsers() : User[] {
      return this.users;
    }



}
