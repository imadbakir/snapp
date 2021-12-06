import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './components/car/car.component';



@NgModule({
  declarations: [
    CarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[CarComponent]
})
export class UiModule { }
