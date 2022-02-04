import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemInfoComponentRoutingModule } from './item-info-component-routing.module';
import { ItemInfoComponentComponent } from './item-info-component.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ItemInfoComponentComponent
  ],
  imports: [
    CommonModule,
    ItemInfoComponentRoutingModule,
    FormsModule
  ],

  exports:[
    ItemInfoComponentComponent
  ]
})
export class ItemInfoComponentModule { }
