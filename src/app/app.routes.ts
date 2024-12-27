import { Routes } from '@angular/router';
import {HeaderTemplate} from './layouts/header/header.template';
import {SidebarTemplate} from './layouts/sidebar/sidebar';

export const routes: Routes = [
  {
    path: 'header',
    loadComponent: () =>
      import('./layouts/header/header.template').then((c) => c.HeaderTemplate),
    data: {
      showHerroBanner: false,
      showSearchBar: true,
      showHeader: true,
    },
  },
  // {
  //   path: 'sidebar',
  //   loadComponent: () =>
  //     import('./layouts/sidebar/sidebar').then((c) => c.SidebarTemplate),
  //   data: {
  //     showHerroBanner: false,
  //     showSearchBar: true,
  //     showHeader: true,
  //   },
  // },
  {
    path: 'bootstrap',
    loadComponent: () =>
      import('./component/bootstrap/bootstrap.template').then((c) => c.BootstrapTemplate),
    data: {
      showHerroBanner: false,
      showSearchBar: true,
      showHeader: false,
    },
  },
  //template button
  {
    path: 'button',
    loadComponent: () =>
      import('./component/button/button.template').then((c) => c.ButtonTemplate),
    data: {
      showHerroBanner: false,
      showSearchBar: true,
      showHeader: false,
    },
  }

];
