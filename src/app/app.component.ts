import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SA Kitchen';

  data;
  displayRecipe(event: any) {
    this.data = event;
    // console.log(this.data);
  }
}
