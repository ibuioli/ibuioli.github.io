import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from '../globals';

@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.css']
})
export class InstalacionesComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle(Globals.NAME+" - "+Globals.I+Globals.INSTALACIONES);
  }

  ngOnInit() {
  }

}
