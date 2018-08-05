import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Detalles } from '../../detalles';

@Component({
  selector: 'app-t-detail',
  templateUrl: './t-detail.component.html',
  styleUrls: ['./t-detail.component.css']
})

export class TDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  public detalles: Detalles;

  constructor(private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

      switch(params['id']) {
        case 'maquina-girondo':
          this.detalles = {
            titulo: "Máquina Girondo: Autómatas generadores de narrativas discursivas",
            destacado: "-Presentado en el 2° Congreso internacional de las Artes: Revueltas del arte",
            tecnica: "Artículo académico",
            descripcion: "Durante la década de 1920 se produjeron diversas vanguardias artísticas dedicadas a la producción de textos en formatos generativos. Mediante azares o cierto desconocimiento, se buscaba conseguir una narración donde los autores tuvieran un control casi nulo del resultado final. Fueron la poesía dadaista y el cadáver exquisito algunos de los casos más emblemáticos, los cuales -debido a la tecnología del momento- se limitaron a juegos y experimentos grupales (Tristan Tzara, Robert Desnos, Paul Éluard, André Bretón, entre otros). Nuestras tecnologías actuales nos regalan amplias posibilidades donde una máquina puede ocuparse de la tarea del artista en la producción de obras visuales, composiciones sonoras e incluso el montaje de registros en video. Aun así, lo investigado en el campo de la generación de narrativas discursivas sigue siendo escaso. El presente desarrollo da cuenta de la construcción de un algoritmo orientado a la concepción de poemas con los recursos estilísticos de Oliverio Girondo, investigando -a su paso- cuáles son los alcances actuales respecto a la generación algorítmica de textos.",
            autors: "Ignacio Buioli",
            ano: "2017",
            tags: "girondo, algoritmo, investigación",
            url: "https://www.academia.edu/36148261/La_M%C3%A1quina_Girondo_Aut%C3%B3matas_generadores_de_narrativas_discursivas",
            url2: "./assets/pdf/la_maquina_girondo_automatas_generadores.pdf",
            img: "assets/cont/mg-paper.jpg"
          };
         break;
        case 'processing':
          this.detalles = {
            titulo: "Processing: Un Lenguaje al Alcance de Todos",
            destacado: "",
            tecnica: "Manual Técnico | Lenguajes",
            descripcion: "Dado el avance de los medios de producción multimedial, nace un potente software dedicado a la producción de imágenes, animaciones e interactivos. El software denominado Processing. El proyecto da inicio en el 2001, realizado por Casey Reas y Ben Fry, a partir de terminologías realizadas en el MIT Lab, dirigido por John Maeda [...]",
            autors: "Jaime Pérez Marín, Ignacio Buioli",
            ano: "2012, rev 2013 - 2016",
            tags: "processing, manual, español, spanish, handbook",
            url: "http://es.scribd.com/doc/91548733/Processing-Un-Lenguaje-Al-Alcance-de-Todos",
            url2: "./assets/pdf/processing-un-lenguaje-al-alcance-de-todos.pdf",
            img: "assets/cont/processing.jpg"
          };
         break;
         case 'interfaz-hipertextual':
           this.detalles = {
             titulo: "La Interfaz Hipertextual",
             destacado: "",
             tecnica: "Técnico",
             descripcion: "Durante el siglo XX, se produjo una revolución socio-cultural, acentuada por la revolución tecnológica que vivía la humanidad. El ser humano, como entidad, comienza a despojarse de lo material, comienza a formar una mente que se sostendría por la abstracción. La creación de la cámara fotográfica produce el nacimiento de [...]",
             autors: "Ignacio Buioli",
             ano: "2012, rev 2018",
             tags: "artículo, técnico, interfaz, hipertexto",
             url: "http://es.scribd.com/doc/96358102/La-Interfaz-Hipertextual",
             url2: "./assets/pdf/la-interfaz-hipertextual.pdf",
             img: "assets/cont/interfaz.jpg"
           };
          break;
       }

      //Cambiar Título
      this.titleService.setTitle(document.title+": "+this.detalles.titulo);
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
