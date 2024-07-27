import { Routes } from '@angular/router';
import { UserTableComponent } from './src/components/user-table/user-table.component';
import { UserFormComponent } from './src/components/user-form/user-form.component';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'users'
    },
    {
        path: 'users', component: UserTableComponent
    },
    {
        path: 'users/create', component: UserFormComponent
    },
    {
        path: 'users/edit/:id', component: UserFormComponent
    }
];
