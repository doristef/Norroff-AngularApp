import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent {
 @Input() triviaDetail: Array<any>;

 public id: Number;
 public buttonName: String = 'Show';
 
  constructor() {}

  toggleIdField(id) {
    let element = document.getElementById('div' + id) as HTMLElement;
    let button = document.getElementById('button' + id) as HTMLElement;
      element.style.display === "none" ? element.style.display = "block" : element.style.display = "none";
      button.innerHTML === "Show Answer" ? button.innerHTML = "Hide Answer" : button.innerHTML = "Show Answer";
}

}
