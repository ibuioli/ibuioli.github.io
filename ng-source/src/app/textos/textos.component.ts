import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from '../globals';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-textos',
  templateUrl: './textos.component.html',
  styleUrls: ['./textos.component.css']
})
export class TextosComponent implements OnInit {

  constructor(private titleService: Title, private seo: SeoService) {}

  ngOnInit() {
    let title:string = Globals.NAME+" - "+Globals.T+Globals.TEXTOS;
    this.titleService.setTitle(title);
    /////////////////////
    this.seo.generateTags({
      title: title,
      description: Globals.DESC+' Sección de '+Globals.T+Globals.TEXTOS,
      slug: 'textos'
    })
  }

}
