import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularToolbox';

  routes = ['home', 'coordinates-visualizer', 'breathalyzer', 'hash-generator', 'metric-units'];
  constructor(private router: Router) {
    this.router.navigate([this.routes[1]]);
  }
}
