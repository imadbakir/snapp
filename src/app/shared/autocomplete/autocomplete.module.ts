import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives/directives.module';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';

@NgModule({
  declarations: [AutocompleteComponent],
  imports: [CommonModule, ReactiveFormsModule ,DirectivesModule],
  exports: [AutocompleteComponent],
})
export class AutocompleteModule {}
