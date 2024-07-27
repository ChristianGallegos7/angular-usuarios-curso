import { User } from './../../interfaces/user.interface';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule, MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {

  user: User;

  @Output() newUserEventEmitter = new EventEmitter<User>();

  constructor() {
    this.user = new User();
  }

  onSubmit(): void {
    this.newUserEventEmitter.emit(this.user)
    console.log(this.user);
  }
}
