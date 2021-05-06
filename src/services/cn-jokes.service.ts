import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CnJokesService {
  private url = 'http://api.icndb.com/jokes/random/10/?escape=javascript'; // Fetch 10 random jokes, escape special characters
  private conversionUrl = ''; // https://cors-anywhere.herokuapp.com/


  constructor(private http: Http) {
   }

  getJokes(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {
        return response.json();
      })
    );
  }
}
