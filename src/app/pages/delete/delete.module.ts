import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteRoutingModule } from './delete-routing.module';
import { DeleteComponent } from './delete.component';
import { FormsModule } from '@angular/forms';

import { CardComponent } from '../card/card.component';


@NgModule({
  declarations: [
    DeleteComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    DeleteRoutingModule,
    FormsModule,

  ]
})
export class DeleteModule { }
