import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  title = 'Hello World!';

  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }
}
