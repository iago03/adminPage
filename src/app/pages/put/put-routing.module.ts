import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PutComponent } from './put.component';

const routes: Routes = [{ path: '', component: PutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PutRoutingModule { }
