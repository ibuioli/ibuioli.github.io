import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from '@core/globals';
import { SeoService } from '@core/seo';

@Component({
  selector: 'app-hipertextos',
  templateUrl: './hipertextos.component.html',
  styleUrls: ['./hipertextos.component.scss']
})
export class HipertextosComponent implements OnInit {

  constructor(private titleService: Title, private seo: SeoService) {}

  ngOnInit() {
    let title:string = Globals.NAME+" - "+Globals.H+Globals.HIPERTEXTOS;
    this.titleService.setTitle(title);
    /////////////////////
    this.seo.generateTags({
      title: title,
      description: Globals.DESC+' Sección de '+Globals.H+Globals.HIPERTEXTOS,
      slug: 'hipertextos'
    })
  }
}
