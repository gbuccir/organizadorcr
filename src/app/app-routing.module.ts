import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/listitem',
    pathMatch: 'full'
  },
  {
    path: 'pages/listitem',
    loadChildren: () => import('./pages/listitem/listitem.module').then( m => m.ListitemModule)
  },
  {
    path: 'pages/caditem',
    loadChildren: () => import('./pages/caditem/caditem.module').then( m => m.CaditemModule)
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
