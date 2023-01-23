import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  configUrl = 'https://fakestoreapi.com/products/';

  getProduct() {
    return this.http.get<any>(this.configUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
