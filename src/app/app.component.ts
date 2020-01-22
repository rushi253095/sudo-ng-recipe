import { AuthService } from './../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SA Kitchen';
  data;
  isAuthenticated;
  displayRecipe(event: any) {
    this.data = event;
    // console.log(this.data);
  }
  constructor(private authService: AuthService) {}
  async ngOnInit() {
    this.isAuthenticated = await this.authService.isAuthenticated();
  }
  logout() {
    this.authService.logout();
  }

}
