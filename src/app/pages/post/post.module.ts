import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { FormsModule } from '@angular/forms';
import { ItemInfoComponentModule } from '../item-info-component/item-info-component.module';


@NgModule({
  declarations: [
    PostComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ItemInfoComponentModule
  ],

  exports:[
    PostComponent
  ]
  
})
export class PostModule { }
