import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemInfoComponentComponent } from './item-info-component.component';

const routes: Routes = [{ path: '', component: ItemInfoComponentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemInfoComponentRoutingModule { }
