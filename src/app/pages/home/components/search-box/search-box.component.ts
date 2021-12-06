import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { City } from 'src/app/core/services/city-search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  searchForm = new FormGroup({
    city: new FormControl(null),
    distance: new FormControl(3000),
    sort: new FormControl('distance'),
  });
  sortingOptions: dropdownOption[] = [
    {
      label: 'Price',
      value: 'price',
    },
    {
      label: 'Recommended',
      value: 'recommended',
    },
    {
      label: 'Distance',
      value: 'distance',
    },
  ];
  distance: dropdownOption[] = [
    {
      label: '3 Km',
      value: 3000,
    },
    {
      label: '5 Km',
      value: 5000,
    },
    {
      label: '7 Km',
      value: 7000,
    },
  ];
  onDestroy$ = new EventEmitter();

  @Output()
  filter = new EventEmitter<Filter>();
  constructor() {}

  ngOnInit(): void {
    this.searchForm.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((data) => {
        this.filter.emit(data);
      });
  }
  ngOnDestroy(): void {
    this.onDestroy$.emit();
  }
}

export interface dropdownOption {
  label: string;
  value: string | number;
}
export interface Filter {
  distance: number | undefined;
  sort: string | undefined;
  city: City  | undefined;
}
