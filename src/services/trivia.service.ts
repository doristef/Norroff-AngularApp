import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  private url = 'https://opentdb.com/api.php?amount=10&category=14&type=boolean';
  private conversionUrl = '';


  constructor(private http: Http) {
   }

  getTrivia(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {
        return response.json();
      })
    );
  }

}
