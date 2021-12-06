import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing/home-routing.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AutocompleteModule } from 'src/app/shared/autocomplete/autocomplete.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from 'src/app/shared/ui/ui.module';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent],
  imports: [ReactiveFormsModule, HomeRoutingModule, CommonModule, AutocompleteModule, UiModule],
})
export class HomeModule {}
