import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {
      id: 1,
      name: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'XXXXXXXXXXX',
      userName: 'XXXXXXX'
    },
    {
      id: 2,
      name: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com',
      password: 'XXXXXXXXXXX',
      userName: 'XXXXXXX'
    }
  ];


  constructor() { }

  findAll(): Observable<User[]> {
    return of(this.users);
  }
}
