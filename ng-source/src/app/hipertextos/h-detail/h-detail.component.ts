import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Detalles } from '../../detalles';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-h-detail',
  templateUrl: './h-detail.component.html',
  styleUrls: ['./h-detail.component.scss']
})
export class HDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  public detalles: Detalles;

  constructor(private route: ActivatedRoute, private titleService: Title, private seo: SeoService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

       switch(params['id']) {
         case 'm-girondo':
           this.detalles = {
             titulo: "Máquina Girondo",
             destacado: "",
             tecnica: "",
             descripcion: "Proyecto de texto generativo en la Web. Un algoritmo genera en tiempo real poemas con la estética del poeta argentino Oliverio Girondo, pudiendo producir infinitos poemas 'inéditos'.",
             autors: "Ignacio Buioli (parte del Proyecto de Investigación 34/0404 'Oliverio expandido')",
             ano: "2016-2017",
             tags: "web, texto, generativo, generatividad",
             url: "ibuioli.com.ar/maquina-girondo",
             url2: "",
             img: "assets/cont/mg.jpg"
           };
          break;
        case 'digicenosis':
          this.detalles = {
            titulo: "Digicenosis",
            destacado: "",
            tecnica: "",
            descripcion: "Entorno web de ecosistemas digitales. El usuario descubre una serie de experiencias sensitivas a cargo de un grupo de criaturas virtuales que nacen, se desarrollan, y mueren. Creado con Processing y ProcessingJS en un entorno de trabajo de HTML5, CSS3 y JavaScript (jQuery).",
            autors: "Ignacio Buioli",
            ano: "2012",
            tags: "web, vida, arficial, digital, ecosistema",
            url: "ibuioli.com.ar/digicenosis",
            url2: "",
            img: "assets/cont/digicenosis.jpg"
          };
         break;
         case 'qbita':
           this.detalles = {
             titulo: "Qbita",
             destacado: "-Presentado en Muestra del ATAM-IUNA, 2011. Museo Ernesto de la Cárcova, Buenos Aires.",
             tecnica: "",
             descripcion: "Sitio web minimalista acerca de Realidad Aumentada. Pretende llevar famosas obras de arte al sector urbano a través de la tecnología de Realidad Aumentada. Utiliza la metáforma de la galería de arte para disponer la información.",
             autors: "Pablo Andón, Karen Colletti, Ignacio Buioli",
             ano: "2011-2012, rev. 2017",
             tags: "web, realidad, aumentada, museo, pinturas",
             url: "ibuioli.com.ar/qbita",
             url2: "",
             img: "assets/cont/qbita.jpg"
           };
          break;
         case 'p-yo':
           this.detalles = {
             titulo: "Proyecto Yo: Los Misterios de la Avenida 27",
             destacado: "",
             tecnica: "",
             descripcion: "Proyecto auto-referencialista. Se presenta un enigmático laberinto policial dentro de un sitio web a través de una serie de acertijos para el usuario. En cada instancia se arma una historia de suspenso que depende del recorrido trazado por el usuario dentro del hipertexto.",
             autors: "Ignacio Buioli",
             ano: "2011",
             tags: "proyecto, web, policial, novela",
             url: "ibuioli.com.ar/proyecto-yo",
             url2: "",
             img: "assets/cont/p-yo.jpg"
           };
          break;
      }

      //Cambiar Título
      this.titleService.setTitle(document.title+": "+this.detalles.titulo);
      //Cambiar SEO
      this.seo.generateTags({
        title: document.title,
        description: this.detalles.descripcion,
        slug: 'h/'+params['id']
      })
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
