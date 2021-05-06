import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from './../../services/weather-service.service';
import { CnJokesService } from './../../services/cn-jokes.service';
import { AdviceService } from './../../services/advice.service';
import { TriviaService } from './../../services/trivia.service';
import { ExchangeService } from './../../services/exchange.service';
import 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  providers: [WeatherService, CnJokesService, AdviceService, TriviaService, ExchangeService],
})

export class DashboardPageComponent implements OnInit {

  public weatherDetail: Array<any>;
  public jokesDetail: Array<any>;
  public adviceDetail: Array<any>;
  public triviaDetail: Array<any>;
  public exchangeDetail: Array<any>;
  public id: Number;
  public buttonName: String = 'Show';
  public username: String;
  
  constructor(
    protected router: Router, 
    protected weatherService: WeatherService,
    protected norrisJokesService: CnJokesService,
    protected adviceService: AdviceService,
    protected triviaService: TriviaService,
    protected exchangeService: ExchangeService,
    ) {}

    toggleClass(id) {
      let element = document.getElementById(id) as HTMLElement;
      element.classList.contains('active') ? 
      element.classList.remove('active') : 
      element.classList.add('active')
   }
   toggleNav(id) {
    let element = document.getElementById(id) as HTMLElement;
    element.classList.contains('collapse') ? 
    element.classList.remove('collapse') : 
    element.classList.add('collapse')
 }

  ngOnInit() {

    this.username = localStorage.getItem('Username').charAt(0).toUpperCase() + localStorage.getItem('Username').slice(1); // Get username and Uppercase first!

    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }

    this.weatherService.getWeekForecast()
    .subscribe(
      weather => {
      this.weatherDetail = weather.consolidated_weather;
    });

    this.norrisJokesService.getJokes()
    .subscribe(
      jokes => {
      this.jokesDetail = jokes.value;
    });

    this.adviceService.getAdvice()
    .subscribe(
      advice => {
        let arrayen = [];
        arrayen.push(advice.slip);
        this.adviceDetail = arrayen; // since ngFor only accepts array, push result object to an array and then to this.adviceDetail
      }
    )

    this.triviaService.getTrivia()
    .subscribe(
      question => {
        this.triviaDetail = question.results;
      }
    )

    this.exchangeService.getExchange()
    .subscribe(
      exchange => {
        this.exchangeDetail = exchange.results;
      }
    )

  }
}