import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from '../globals';

@Component({
  selector: 'app-visuales',
  templateUrl: './visuales.component.html',
  styleUrls: ['./visuales.component.css']
})
export class VisualesComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle(Globals.NAME+" - "+Globals.V+Globals.VISUALES);
  }

  ngOnInit() {
  }

}
