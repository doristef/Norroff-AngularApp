import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  private url = 'https://apis.is/currency/m5';
  private conversionUrl = '';


  constructor(private http: Http) {
   }

  getExchange(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {
        return response.json();
      })
    );
  }

}

