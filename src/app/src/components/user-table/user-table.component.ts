import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

import { User } from '../../interfaces/user.interface';


@Component({
  selector: 'user-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule
  ],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {

  @Input() users: User[] = [];

  displayedColumns: string[] = ['id', 'name', 'lastName', 'userName', 'email', 'password', 'remove', 'edit'];

  @Output() idUserEventEmitter = new EventEmitter();

  onRemoveUser(id: number): void {
    this.idUserEventEmitter.emit(id);
  }

  @Output() selectedUserEventEmitter = new EventEmitter();

  onEditUser(user: User): void {
    this.selectedUserEventEmitter.emit(user);
  }
}
