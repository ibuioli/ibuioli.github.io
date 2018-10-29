import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { Detalles } from '@core/details';
import { SeoService } from '@core/seo';

@Component({
  selector: 'app-a-detail',
  templateUrl: './a-detail.component.html',
  styleUrls: ['./a-detail.component.scss']
})

export class ADetailComponent implements OnInit, OnDestroy {
  public sub: any;
  public detalles: Detalles;
  public url: SafeUrl;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private titleService: Title, private seo: SeoService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

       switch(params['id']) {
         case 'metaxy':
           this.detalles = {
             titulo: "Metaxy",
             destacado: "",
             tecnica: "Animación CGI + Animación 2D",
             descripcion: "Simulación de producción de videojuego, basado en la obra 'La invención de Morel' de Adolfo Bioy Casares.",
             autors: "Mariano Ferle, Julián Reinoso, Ignacio Buioli",
             ano: "2010",
             tags: "simulación, videojuego, animación",
             url: "https://player.vimeo.com/video/70336110?title=0&amp;byline=0&amp;portrait=0&amp;color=ff233d",
             url2: "",
             img: ""
           };
          break;
         case 'aprendizaje-hipernatural':
           this.detalles = {
             titulo: "Aprendizaje Hipernatural",
             destacado: "",
             tecnica: "Animación CGI",
             descripcion: "Simulación de un posible Net.Art/Hipertexto basado en la película 'Primavera, Verano, Otoño, Invierno y otra vez Primavera'.",
             autors: "Pablo Andón, Ignacio Buioli",
             ano: "2011",
             tags: "simulación, web, interfaz, hipertexto, natural",
             url: "https://player.vimeo.com/video/70376759?color=ff233d&title=0&byline=0&portrait=0",
             url2: "",
             img: ""
           };
           break;
        case 'apologo':
          this.detalles = {
            titulo: "Apólogo",
            destacado: "",
            tecnica: "Técnicas Mixtas",
            descripcion: "Videominuto final realizado para la materia 'Proyecto Visual 1'. Intervienen técnicas de stopmotion, fotonovela, videosecuencia, recorrido 2D/3D e interpolación de movimiento entre los fotogramas.",
            autors: "Ignacio Buioli",
            ano: "2011",
            tags: "caverna, sombras, negativo, recorrido, stopmotion",
            url: "https://player.vimeo.com/video/70303737?title=0&amp;byline=0&amp;portrait=0&amp;color=ff233d",
            url2: "",
            img: ""
          };
          break;
        case 'hombre-elefante':
          this.detalles = {
            titulo: "Títulos 'El Hombre Elefante'",
            destacado: "",
            tecnica: "Títulos de Película",
            descripcion: "Títulos de entrada alternativos (de autor) para la película 'El hombre elefante' de David Lynch. Separación por planos, fotografía, recorrido 2D y stopmotion.",
            autors: "Ignacio Buioli",
            ano: "2011",
            tags: "títulos, pelicula, hombre, elefante",
            url: "https://player.vimeo.com/video/70350098?color=ff233d&title=0&byline=0&portrait=0",
            url2: "",
            img: ""
          };
          break;
        case 'esa-vieja-casa-de-arte':
          this.detalles = {
            titulo: "Esa Vieja Casa de Arte",
            destacado: "-Presentado en Muestra del ATAM del IUNA, 2011. Buenos Aires.",
            tecnica: "Mapping",
            descripcion: "Simulación de Mapeo realizado sobre fotografías de la Casa de la Cultura, Avellaneda. Se trabaja con la idea de producir una ruptura de pensamiento acerca de la venta política.",
            autors: "Mariano Ferle, Ignacio Buioli",
            ano: "2011",
            tags: "mapping, superficie, casa, arte",
            url: "https://player.vimeo.com/video/70356184?color=d350eb&title=0&byline=0&portrait=0",
            url2: "",
            img: ""
          };
          break;
      }

      //URL Segura
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.detalles.url);
      //Cambiar Título
      this.titleService.setTitle(document.title+": "+this.detalles.titulo);
      //Cambiar SEO
      this.seo.generateTags({
        title: document.title,
        description: this.detalles.descripcion,
        slug: 'a/'+params['id']
      })
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
