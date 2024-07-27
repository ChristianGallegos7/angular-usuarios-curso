
import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service'
import { UserTableComponent } from '../user-table/user-table.component';
import { UserFormComponent } from '../user-form/user-form.component';


@Component({
  selector: 'user-app',
  standalone: true,
  imports: [
    UserTableComponent,
    UserFormComponent
  ],
  templateUrl: './user-app.component.html',
})
export class UserAppComponent implements OnInit {
  users: User[] = [];

  constructor(private service: UserService) { }



  ngOnInit(): void {
    this.service.findAll().subscribe(users => this.users = users)
  }

  addUser(user: User): void {
    this.users = [...this.users, { ...user }]
  }

}
