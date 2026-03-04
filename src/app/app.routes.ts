import { Routes } from '@angular/router';
import { UserList } from './pages/user-list/user-list';
import { UserDetail } from './pages/user-detail/user-detail';

export const routes: Routes = [
  { 
    path: 'users', 
    component: UserList 
  },
  { 
    path: 'users/:id', 
    component: UserDetail 
  },
  { 
    path: '', 
    redirectTo: 'users', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: 'users' 
  }
];