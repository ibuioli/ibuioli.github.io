import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name:string;
  public subtitle:string;
  ////////////////
  public a:string;
  public v:string;
  public t:string;
  public h:string;
  public i:string;
  public p:string;
  public audiovisuales:string;
  public visuales:string;
  public textos:string;
  public hipertextos:string;
  public instalaciones:string;
  public performances:string;
  ////////////////
  public copy:string;

  constructor(private titleService: Title){
    this.name = Globals.NAME;
    this.subtitle = "Artes Multimediales";
    ////////////////
    this.a = Globals.A;
    this.v = Globals.V;
    this.t = Globals.T;
    this.h = Globals.H;
    this.i = Globals.I;
    this.p = Globals.P;
    this.audiovisuales = this.a+Globals.AUDIOVISUALES;
    this.visuales = this.v+Globals.VISUALES;
    this.textos = this.t+Globals.TEXTOS;
    this.hipertextos = this.h+Globals.HIPERTEXTOS;
    this.instalaciones = this.i+Globals.INSTALACIONES;
    this.performances = this.p+Globals.PERFORMANCES;
    ////////////////
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
