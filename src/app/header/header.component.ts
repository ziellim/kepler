import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  isDark(){
    const routesWithDarkCss = ['/home'];
    return routesWithDarkCss.includes(this._router.url);
  }

}
