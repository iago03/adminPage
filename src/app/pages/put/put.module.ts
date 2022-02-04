import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PutRoutingModule } from './put-routing.module';
import { PutComponent } from './put.component';
import { FormsModule } from '@angular/forms';
import { ItemInfoComponentModule } from '../item-info-component/item-info-component.module';



@NgModule({
  declarations: [
    PutComponent,
  ],
  imports: [
    CommonModule,
    PutRoutingModule,
    FormsModule,
    ItemInfoComponentModule
  ]
})
export class PutModule { }
