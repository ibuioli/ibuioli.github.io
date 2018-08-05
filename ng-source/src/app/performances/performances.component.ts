import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from '../globals';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.css']
})
export class PerformancesComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle(Globals.NAME+" - "+Globals.P+Globals.PERFORMANCES);
  }

  ngOnInit() {
  }

}
