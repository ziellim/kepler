import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kepler';
  constructor(private _router: Router) { }
  hasFooter(){
    const routesWithHeader = ['/home','/pricing'];
    return routesWithHeader.includes(this._router.url);
  }
}
