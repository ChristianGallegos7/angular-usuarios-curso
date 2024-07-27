import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [],
  templateUrl: './user-app.component.html',
})
export class UserAppComponent implements OnInit {
  users: User[] = [];

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(users => this.users = users)
  }

}
