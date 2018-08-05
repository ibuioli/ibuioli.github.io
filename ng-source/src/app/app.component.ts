import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  subtitle:string;
  ////////////////
  copy:string;

  constructor(private titleService: Title){
    this.name = Globals.NAME;
    this.subtitle = "Artes Multimediales";
    this.copy ="© "+Globals.NAME+" | 2010 - 2018";
  }

  ngOnInit(){
    this.titleService.setTitle(Globals.NAME+" - Portfolio");

    var url = document.location.search;

    //////////////////////////////////////////////////////
    if(url == "?processing" || url == "?processing="){
      location.href = "/textos/t/processing";
    }
    //////////////////////////////////////////////////////

    //Fin Init
  }
}
