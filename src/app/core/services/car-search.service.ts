import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CarSearchService {
  constructor(private http: HttpClient) {}

  searchCars(params = {}): Observable<any> {
    return this.http.get(`${environment.api}/search/query`, { params });
  }
}
