import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from '@core/globals';
import { SeoService } from '@core/seo';

@Component({
  selector: 'app-visuales',
  templateUrl: './visuales.component.html',
  styleUrls: ['./visuales.component.scss']
})
export class VisualesComponent implements OnInit {

  constructor(private titleService: Title, private seo: SeoService) {}

  ngOnInit() {
    let title:string = Globals.NAME+" - "+Globals.V+Globals.VISUALES;
    this.titleService.setTitle(title);
    /////////////////////
    this.seo.generateTags({
      title: title,
      description: Globals.DESC+' Sección de '+Globals.V+Globals.VISUALES,
      slug: 'textos'
    })
  }

}
