import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app/app.component';
import { LoginComponent } from './components/login-component/login-component.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { routing } from './app.routes';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { WeatherComponent } from './components/weather/weather.component';
import { AdviceComponent } from './components/advice/advice.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardPageComponent,
    LoginPageComponent,
    ExchangeComponent,
    TriviaComponent,
    JokesComponent,
    WeatherComponent,
    AdviceComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
