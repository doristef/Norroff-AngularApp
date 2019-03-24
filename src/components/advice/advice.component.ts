import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})
export class AdviceComponent {
 @Input() adviceDetail: Array<any>;

  constructor() {}

}
