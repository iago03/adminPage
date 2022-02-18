import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/post/post.module').then(m => m.PostModule) }, 
{ path: 'put', loadChildren: () => import('./pages/put/put.module').then(m => m.PutModule) }, 
{ path: 'delete', loadChildren: () => import('./pages/delete/delete.module').then(m => m.DeleteModule) }, 
{ path: 'itemInfoComponent', loadChildren: () => import('./pages/item-info-component/item-info-component.module').then(m => m.ItemInfoComponentModule) }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
