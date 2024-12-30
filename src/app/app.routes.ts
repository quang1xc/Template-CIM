import { Routes } from '@angular/router';
import {HeaderTemplate} from './layouts/header/header.template';
import {SidebarTemplate} from './layouts/sidebar/sidebar';
import {AuthGuard} from './common/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./auth/login/login.component').then((c) => c.LoginComponent),
    data: {
      showHeader: false,
      showSidebar: false,
      showLogin: true,
    },
  },
  {
    path: 'bootstrap',
    loadComponent: () =>
      import('./component/bootstrap/bootstrap.template').then((c) => c.BootstrapTemplate),
    data: {
      showHeader: true,
      showSidebar: true,
    },
    canActivate: [AuthGuard],
  },
  //template button
  {
    path: 'button',
    loadComponent: () =>
      import('./component/button/button.template').then((c) => c.ButtonTemplate),
    data: {
      showHeader: true,
      showSidebar: true,
    },
    canActivate: [AuthGuard],
  },
  //template form
  {
    path: 'form',
    loadComponent: () =>
      import('./component/form/form.template').then((c) => c.FormTemplate),
    data: {
      showHeader: true,
      showSidebar: true,
    },
    canActivate: [AuthGuard],
  }

];
