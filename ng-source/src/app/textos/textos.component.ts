import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from '../globals';

@Component({
  selector: 'app-textos',
  templateUrl: './textos.component.html',
  styleUrls: ['./textos.component.css']
})
export class TextosComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle(Globals.NAME+" - "+Globals.T+Globals.TEXTOS);
  }

  ngOnInit() {
    
  }

}
