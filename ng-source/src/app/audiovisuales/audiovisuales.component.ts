import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from '../globals';

@Component({
  selector: 'app-audiovisuales',
  templateUrl: './audiovisuales.component.html',
  styleUrls: ['./audiovisuales.component.css']
})
export class AudiovisualesComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle(Globals.NAME+" - "+Globals.A+Globals.AUDIOVISUALES);
  }

  ngOnInit() {

  }
}
