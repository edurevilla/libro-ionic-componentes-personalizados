import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludaComponent } from './saluda/saluda.component';



@NgModule({
  declarations: [SaludaComponent],
  imports: [
    CommonModule
  ],
  exports: [SaludaComponent]
})
export class ComponentsModule { }
