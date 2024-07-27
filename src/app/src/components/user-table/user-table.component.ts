import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'user-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent {

  @Input() users: User[] = [];

  displayedColumns: string[] = ['id', 'name', 'lastName', 'userName', 'email', 'password'];

}
