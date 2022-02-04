import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteRoutingModule } from './delete-routing.module';
import { DeleteComponent } from './delete.component';
import { FormsModule } from '@angular/forms';
import { CardModule } from '../card/card.module';


@NgModule({
  declarations: [
    DeleteComponent
  ],
  imports: [
    CommonModule,
    DeleteRoutingModule,
    FormsModule,
    CardModule
  ]
})
export class DeleteModule { }
