import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule
  ],
  exports:[
    CardModule
  ]
})
export class SharedModule { }
