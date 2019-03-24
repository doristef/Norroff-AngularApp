import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent {
 @Input() exchangeDetail: Array<any>;

  constructor() {}

}
