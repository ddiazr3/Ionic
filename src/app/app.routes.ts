import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  /*{
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },*/
  {
    path: 'home',
    loadComponent: () => import('./pages/scanner/scanner.page').then( m => m.ScannerPage)
  },
  {
    path: 'formulario',
    loadComponent: () => import('./pages/formulario/formulario.page').then( m => m.FormularioPage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./pages/alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'offline',
    loadComponent: () => import('./pages/offline/offline.page').then( m => m.OfflinePage)
  },
  {
    path: 'pushnotification',
    loadComponent: () => import('./pages/pushnotification/pushnotification.page').then( m => m.PushnotificationPage)
  },
  {
    path: 'maps',
    loadComponent: () => import('./pages/maps/maps.page').then( m => m.MapsPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./pages/card/card.page').then( m => m.CardPage)
  },
  {
    path: 'card/:id',
    loadComponent: () => import('./pages/rickmorty/rickmorty.page').then( m => m.RickmortyPage)
  },
  {
    path: 'list',
    loadComponent: () => import('./pages/list/list.page').then( m => m.ListPage)
  },
  {
    path: 'foto',
    loadComponent: () => import('./pages/foto/foto.page').then( m => m.FotoPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'generadorqr',
    loadComponent: () => import('./pages/generadorqr/generadorqr.page').then( m => m.GeneradorqrPage)
  }
];
