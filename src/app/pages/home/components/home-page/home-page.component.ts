import { Component, OnInit } from '@angular/core';
import { CarSearchService } from 'src/app/core/services/car-search.service';
import { Filter } from '../search-box/search-box.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private carSearchService: CarSearchService) {}
  cars = [];
  ngOnInit(): void {}
  searchCars(filter: Filter) {
    this.carSearchService
      .searchCars({
        'max-distance': filter.distance,
        sort: filter.sort,
        lng: filter.city?.lng,
        lat: filter.city?.lat,
      })
      .subscribe((cars) => (this.cars = cars.results));
  }
}
