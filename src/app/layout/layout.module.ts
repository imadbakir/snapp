import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './components/basic/basic.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [BasicComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [BasicComponent],
})
export class LayoutModule {}
