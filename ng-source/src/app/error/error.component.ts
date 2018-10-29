import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from '@core/globals';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  constructor(private titleService: Title) {
    titleService.setTitle(Globals.NAME+" - Error 404");
  }

}
