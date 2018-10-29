import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from '@core/globals';
import { SeoService } from '@core/seo';

@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.scss']
})
export class InstalacionesComponent implements OnInit {

  constructor(private titleService: Title, private seo: SeoService) {}

  ngOnInit() {
    let title:string = Globals.NAME+" - "+Globals.I+Globals.INSTALACIONES;
    this.titleService.setTitle(title);
    /////////////////////
    this.seo.generateTags({
      title: title,
      description: Globals.DESC+' Sección de '+Globals.I+Globals.INSTALACIONES,
      slug: 'instalaciones'
    })
  }

}
