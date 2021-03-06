import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Globals } from '@core/globals';
import { SeoService } from '@core/seo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public biografia:string;
  public name:string;

  constructor(private titleService: Title, private seo: SeoService) {}

  ngOnInit() {
    this.titleService.setTitle(Globals.NAME+" - Portfolio");
    /////////////////////
    this.seo.generateTags({
      title: Globals.NAME+" - Portfolio",
      description: 'Portfolio Personal de Ignacio Buioli, Licenciado en Artes Multimediales. Especialización en programación interactiva y tecnología',
      slug: 'portfolio'
    })
    /////////////////////////////////////////////////////////////
    this.biografia = "Ignacio Buioli nació en Avellaneda (Provincia de Buenos Aires, Argentina) el 18 de Mayo de 1992. Realizó sus estudios en la Univesidad Nacional de las Artes (UNA - Ex IUNA), \
    egresando como Técnico y -posteriormente- Licenciado en Artes Multimediales. Ha desarrollado numerosos proyectos de Multimedia así como también escrito artículos y traducido textos del mencionado tema, de entre los que se destaca el manual \"Processing: Un lenguaje al alcance de todos\".<br> \
    Participó de muestras y eventos artísticos en distintos espacios como la sede de Artes Multimediales UNA, el Museo de Calcos y Escultura Comparada Ernesto de la Cárcova, el Instituto Escuela Nacional de Bellas Artes de Montevideo, la Alianza Francesa de Buenos Aires o el Centro de Experimentación del Teatro Colón.<br> \
    Asimismo ha participado de diversos congreso y seminarios, entre los que se destacan el Seminario Internacional NH/T 2014 y 2015, y el 2° Congreso Internacional de las Artes; como así también ha desarrollado con éxito certámenes y becas, tal es el caso de la Beca Estímulo a la Vocación Científica 2015-2016, otorgada por el Consejo Interuniversitario Nacional.<br> \
    Actualmente se desempeña como programador de diseño interactivo y empresarial en la Cooperativa de Trabajo Moldeo Interactive, especializándose en las tecnologías NodeJS, Angular y Electron; y como investigador independiente en Universidades.";
    /////////////////////
    this.name = Globals.NAME;
  }

}
