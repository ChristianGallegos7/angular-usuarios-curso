
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service'
import { UserTableComponent } from './user-table/user-table.component';
import { UserFormComponent } from './user-form/user-form.component';
import Swal from 'sweetalert2';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'user-app',
  standalone: true,
  imports: [
    RouterOutlet,
    UserTableComponent,
    UserFormComponent,
    NavbarComponent
  ],
  templateUrl: './user-app.component.html',
})

export class UserAppComponent implements OnInit {

  users: User[] = [];

  userSelected: User;

  open: boolean = false;
  
  constructor(private service: UserService) {
    this.userSelected = new User();
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(users => this.users = users)
  }

  addUser(user: User): void {
    if (user.id > 0) {
      this.users = this.users.map(u => u.id === user.id ? user : u);
    } else {
      this.users = [...this.users, { ...user, id: new Date().getTime() }]
    }
    Swal.fire({
      title: "Guardado",
      text: "Usuario guardado con exito",
      icon: "success"
    });
    this.userSelected = new User();
    this.setOpen();
  }

  onRemoveUser(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.users = this.users.filter(user => user.id !== id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

  }

  selectedUser(userRow: User): void {
    this.userSelected = { ...userRow }
  }

  setOpen(){
    this.open = !this.open;
  }
}
