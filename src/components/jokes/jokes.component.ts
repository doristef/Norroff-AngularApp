import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent {
 @Input() jokesDetail: Array<any>;

  constructor() {}

}
