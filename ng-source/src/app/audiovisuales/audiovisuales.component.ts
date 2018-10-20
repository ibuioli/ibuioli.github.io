import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from '../globals';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-audiovisuales',
  templateUrl: './audiovisuales.component.html',
  styleUrls: ['./audiovisuales.component.css']
})
export class AudiovisualesComponent implements OnInit {

  constructor(private titleService: Title, private seo: SeoService) {}

  ngOnInit() {
    let title:string = Globals.NAME+" - "+Globals.A+Globals.AUDIOVISUALES;
    this.titleService.setTitle(title);
    /////////////////////
    this.seo.generateTags({
      title: title,
      description: Globals.DESC+' Sección de '+Globals.A+Globals.AUDIOVISUALES,
      slug: 'audiovisuales'
    })
  }
}
