import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  items = Array.prototype.map.call(Array(10), (val, index) => index);

  constructor() {}
}
