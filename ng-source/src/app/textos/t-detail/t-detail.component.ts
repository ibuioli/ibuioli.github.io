import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Detalles } from '../../detalles';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-t-detail',
  templateUrl: './t-detail.component.html',
  styleUrls: ['./t-detail.component.scss']
})

export class TDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  public detalles: Detalles;

  constructor(private route: ActivatedRoute, private titleService: Title, private seo: SeoService) { }

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
       case 'dialogo-relacional':
         this.detalles = {
           titulo: "Diálogo Relacional, un Bloque de Multimedia",
           destacado: "",
           tecnica: "Artículo académico",
           descripcion: "Arlindo Machado define a los medios artísticos como un sistema de círculos en contacto. Declara que deben ser mirados como círculos de densidad variable, donde el centro más oscuro sea la 'especificidad' del medio. No obstante, Machado hace bien en no interesarse por los 'núcleos' más duros, poniendo el ojo en los espacios más blandos: los de ínter-conexión. Las Artes Multimediales se generan a partir de esos espacios y luego hacen su propio proceso en contramano, culminando en un solo punto sólido y específico. Pero el hecho de que las disciplinas artísticas nazcan en los grises no es un proceso propio de la modernidad y las vanguardias. En contadas ocasiones, muchas pinturas del arte parietal aprovechaban la morfología natural de la cueva o incluso la implementación de sombras como parte de la representación (una suerte de 'proyección' primitiva).",
           autors: "Ignacio Buioli",
           ano: "2015",
           tags: "multimedia, bloque",
           url: "https://www.academia.edu/37402045/Di%C3%A1logo_Relacional_un_bloque_de_Multimedia",
           url2: "./assets/pdf/buioli_ignacio-dialogo_relacional.pdf",
           img: "assets/cont/dialogo-relacional.jpg"
         };
        break;
       case 'mente-interna':
         this.detalles = {
           titulo: "Mente Interna",
           destacado: "",
           tecnica: "Artículo académico",
           descripcion: "La memoria involucrada en la experiencia artística",
           autors: "Ignacio Buioli",
           ano: "2015",
           tags: "multimedia, tiempo, interna",
           url: "https://www.academia.edu/37402035/Mente_Interna_La_memoria_involucrada_en_la_experiencia_art%C3%ADstica",
           url2: "./assets/pdf/buioli_ignacio-mente_interna.pdf",
           img: "assets/cont/mente-interna.jpg"
         };
        break;
       case 'limites-de-cristal':
         this.detalles = {
           titulo: "Límites de Cristal",
           destacado: "",
           tecnica: "Artículo académico",
           descripcion: "Sobre Corazón de Cristal de Werner Herzog en el concepto filosófico del Tiempo",
           autors: "Ignacio Buioli",
           ano: "2014",
           tags: "multimedia, tiempo",
           url: "https://www.academia.edu/37402029/L%C3%ADmites_de_Cristal_Sobre_Coraz%C3%B3n_de_Cristal_de_Werner_Herzog_en_el_concepto_filos%C3%B3fico_del_Tiempo",
           url2: "./assets/pdf/buioli_ignacio-limites_de_cristal.pdf",
           img: "assets/cont/limites-de-cristal.jpg"
         };
        break;
       case 'el-tiempo-en-la-multimedia':
         this.detalles = {
           titulo: "El Tiempo en la Multimedia",
           destacado: "",
           tecnica: "Artículo académico",
           descripcion: "Serie de textos en la búsqueda de una reflexión sobre la utilización del tiempo en distintos formatos, con vistas en comprender el fenómeno temporal en las Artes Multimediales. Escritos durante el año 2014.",
           autors: "Ignacio Buioli",
           ano: "2014",
           tags: "multimedia, tiempo",
           url: "https://www.academia.edu/37401887/El_Tiempo_en_la_Multimedia",
           url2: "./assets/pdf/buioli_ignacio-el_tiempo_en_la_multimedia.pdf",
           img: "assets/cont/el-tiempo-en-la-multimedia.jpg"
         };
        break;
       case 'el-cine-de-las-afueras':
         this.detalles = {
           titulo: "El Cine de las Afueras",
           destacado: "",
           tecnica: "Técnico",
           descripcion: "Sin alejarnos muchos de lo que será su intensa producción audiovisual, podemos comenzar hablando de la infancia del gran director de cine Werner Herzog. Nacido en 1942, lógicamente alemán, creció muy pobre, rodeado de hermanos y hermanastros. Durante muchos años, vivió en un ambiente alejado de las grandes ciudades, con lo cual su contacto con la naturaleza y sus ideas acerca de la industria ya fueron forjándose desde temprana edad.[...]",
           autors: "Ignacio Buioli",
           ano: "2014",
           tags: "cine, herzog",
           url: "https://www.academia.edu/37403653/El_Cine_de_las_Afueras_An%C3%A1lisis_sobre_la_obra_de_Werner_Herzog",
           url2: "./assets/pdf/buioli_ignacio-el_cine_de_las_afueras.pdf",
           img: "assets/cont/el-cine-de-las-afueras.jpg"
         };
        break;
       case 'un-lenguaje-muchos-medios':
         this.detalles = {
           titulo: "Un Lenguaje, Muchos Medios",
           destacado: "",
           tecnica: "Artículo académico",
           descripcion: "Con el advenimiento de los nuevos medios, la informática y la electrónica al alcance de todos, comienzan a consolidarse nuevos métodos aplicados al desarrollo artístico. La disciplinas tradicionales comienzan a generar interdisciplinas por la expansión de sus universos de producción. Y en el medio un arte sin respuesta, un arte que quizás no sea arte. La multimedia se pierde en los matices de las disciplinas artísticas, convirtiéndose en poco menos que una herramienta. Estas líneas tienen como objetivo buscar la consolidación de la multimedia como un lenguaje artístico, reflexionando acerca de su relación con el resto de los lenguajes.",
           autors: "Ignacio Buioli",
           ano: "2014",
           tags: "lenguaje, arte, multimedia, medio",
           url: "https://www.academia.edu/37403671/Un_Lenguaje_Muchos_Medios",
           url2: "./assets/pdf/buioli_ignacio-un_lenguaje_muchos_medios.pdf",
           img: "assets/cont/un-lenguaje-muchos-medios.jpg"
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
      //Cambiar SEO
      this.seo.generateTags({
        title: document.title,
        description: this.detalles.descripcion,
        slug: 't/'+params['id']
      })
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
