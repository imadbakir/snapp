import {
  Component,
  EventEmitter, OnDestroy, OnInit,
  Optional,
  Output,
  Self
} from '@angular/core';
import {
  ControlValueAccessor, FormControl, FormGroup, NgControl, NG_VALUE_ACCESSOR
} from '@angular/forms';
import { debounceTime, switchMap, takeUntil } from 'rxjs';
import {
  City,
  CitySearchService
} from 'src/app/core/services/city-search.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: AutocompleteComponent
    }
  ]

})
export class AutocompleteComponent implements OnInit,OnDestroy,ControlValueAccessor {
  form = new FormGroup({
    term: new FormControl(''),
  });
  cities!: City[];
  manuelSelection!: City | null;
  showPanel = false;
  propagateChange: any = () => {};
  validateFn: any = () => {};
  onDestroy$ = new EventEmitter<City>();

  public onTouched: any = () => {};

  @Output()
  selec = new EventEmitter<City>();
  constructor(
    private citySearchService: CitySearchService
  ) {}
 
  writeValue(obj: City): void {
    if (obj) {
      this.manuelSelection = obj;
    }
  }
  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  select(city: City) {
    this.manuelSelection = city;
    this.form.get('term')?.setValue(city.name, { emitEvent: false });
    this.toggleState(false);
    this.propagateChange(city);
    this.onTouched();
  }
  toggleState(state: boolean) {
    this.showPanel = state;
  }
  ngOnInit(): void {
    this.form
      .get('term')
      ?.valueChanges.pipe(
        takeUntil(this.onDestroy$),
        debounceTime(500),
        switchMap((value) => this.citySearchService.searchCities(value))
      )
      .subscribe((cities) => {
        this.manuelSelection = null;
        this.toggleState(true);

        this.cities = cities;
        if (this.cities.length) {
          this.propagateChange(this.cities[0]);
          this.onTouched();
        }
      });
  }
  ngOnDestroy(): void {
   this.onDestroy$.emit();
  }
}
