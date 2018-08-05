import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from '../globals';

@Component({
  selector: 'app-hipertextos',
  templateUrl: './hipertextos.component.html',
  styleUrls: ['./hipertextos.component.css']
})
export class HipertextosComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle(Globals.NAME+" - "+Globals.H+Globals.HIPERTEXTOS);
  }

  ngOnInit() {
  }

}
