import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { Detalles } from '../../detalles';
import { SeoService } from '../../seo.service';

@Component({
  selector: 'app-i-detail',
  templateUrl: './i-detail.component.html',
  styleUrls: ['./i-detail.component.css']
})
export class IDetailComponent implements OnInit {
  public sub: any;
  public detalles: Detalles;
  public url: SafeUrl;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private titleService: Title, private seo: SeoService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

      switch(params['id']) {
       case 'liberoscopio':
         this.detalles = {
           titulo: "Liberoscopio",
           destacado: "-Aprobado como Proyecto Incentivo a la Producción Artística, 2013. -Presentado en Seminario Internacional NH/T, 2014. Montevideo. -Presentado en muestra anual de ATAM de la UNA, 2014. Buenos Aires.",
           tecnica: "Realidad Aumentada + Técnicas Generativas",
           descripcion: "Instalación interactiva donde se pone de manifiesto la imaginación de los textos literarios de autores argentinos de un modo ostensible, todo a través de la lectura oral de un libro en blanco cuyas limitaciones son expandidas gracias a la Realidad Aumentada. Mediante un micrófono se captan las palabras de los interactores que desean leer los textos, a fin de producir imágenes generativas novedosas dependiendo la cadencia en la lectura, el timbre de voz y la amplitud de la misma. Las imágenes generativas asociadas utilizan la paleta de colores de la tapa original de los libros donde aparecieron dichos textos en primer lugar. Dichas imágenes están generadas a partir de códigos de artistas visuales que trabajan con la generatividad, tales como Jared Tarbell o Casey Reas. Fue realizado para la materia Artes Multimediales 3 de la carrera Artes Multimediales, y finalizado gracias al programa Incentivo a la producción artística 2013; fue presentado en diversas muestras como la Muestra Anual del ATAM 2014 y el Seminario NH/T 2014 realizado en la ciudad de Montevideo.",
           autors: "Evangelina Lepore, Tomas Ortiz Suárez, Ignacio Buioli",
           ano: "2013",
           tags: "libro, generativo, aumentado, lectura, oral, voz, proyección",
           url: "https://player.vimeo.com/video/82054576?title=0&amp;byline=0&amp;portrait=0&amp;color=d350eb",
           url2: "",
           img: ""
         };
         break;
       case 'ebo':
         this.detalles = {
           titulo: "E.B.O.",
           destacado: "-Presentado como proyecto en el Seminario Internacional de Narrativas Hipertextuales NH/T, 2015. Centro Cultural Recoleta.",
           tecnica: "Interfaces Corporales",
           descripcion: "Instalación que investiga el aliento como una interfaz de interacción. El aliento se convierte en alimento para la evolución de las células en organismos capaces (o incapaces) de sobrevivir en un ambiente acuoso. Realizado para la materia Artes Multimediales 3 de la carrera Artes Multimediales.",
           autors: "Evangelina Lepore, Ignacio Buioli",
           ano: "2013",
           tags: "laboratorio, célula, vida, artificial, aliento, soplido, fluidos",
           url: "https://player.vimeo.com/video/82063083?title=0&amp;byline=0&amp;portrait=0&amp;color=d350eb",
           url2: "",
           img: ""
         };
         break;
       case 'forma-de-formar':
         this.detalles = {
           titulo: "Forma de Formar",
           destacado: "",
           tecnica: "Fenómenos Físicos + Interfaces Corporales",
           descripcion: "Instalación destinada a re-significar el fenómeno físico de la vibración en los fluidos a través de las gestualidades sensibles. Las caricias y los golpes producidos sobre una tela se codifican en datos que deformar los rostros de los espectadores que observan su reflejo en el agua. Realizado para la materia Artes Multimediales 3 de la carrera Artes Multimediales.",
           autors: "Evangelina Lepore, Ignacio Buioli",
           ano: "2013",
           tags: "física, espejo, agua, vibración, golpe, caricia",
           url: "http://player.vimeo.com/video/82063671?title=0&amp;byline=0&amp;portrait=0&amp;color=d350eb",
           url2: "",
           img: ""
         };
         break;
       case 'mortempo':
         this.detalles = {
           titulo: "Mortempo",
           destacado: "",
           tecnica: "Visualización de Datos + Realidad Aumentada",
           descripcion: "Utilizando una combinación entre las bases de datos de Mortalidad Infantil y Embarazos Adolescentes (tomada del banco mundial) se produce una instalación de Realidad Aumentada con un Reloj de Arena. Realizado para la materia Informática Aplicada 2 de la carrera Artes Multimediales.",
           autors: "Ignacio Buioli",
           ano: "2013",
           tags: "tiempo, visualización, datos, aumentada, reloj, arena, proyección",
           url: "https://player.vimeo.com/video/79061929?title=0&amp;byline=0&amp;portrait=0&amp;color=d350eb",
           url2: "",
           img: ""
         };
         break;
       case 'pointmatic':
         this.detalles = {
           titulo: "PointMatic",
           destacado: "",
           tecnica: "Instalación Sonora",
           descripcion: "Tratando de recuperar todo lo almacenado por un objeto en decadencia, como los CD, se le propone al interactor convertirse en el láser que lee aquellos datos. Realizado con Processing, Arduino y pD, casi completamente con materiales en desuso. Realizado para la materia Laboratorio de Sonido 3 de la carrera Artes Multimediales.",
           autors: "Micaela Balbuena, Gabriel Vich, Ignacio Buioli",
           ano: "2013",
           tags: "cd, proyección, sonora, música, epocas, esfera",
           url: "https://player.vimeo.com/video/82019952?title=0&amp;byline=0&amp;portrait=0&amp;color=d350eb",
           url2: "",
           img: ""
         };
         break;
       case 'nan':
         this.detalles = {
           titulo: "NaN;",
           destacado: "",
           tecnica: "Generación Algorítmica de Imágenes",
           descripcion: "Realizado para la cátedra de Proyecto Visual 3, donde se propone la producción de un proyecto durante un año entero, mientras se realizan diversos trabajos con motivos de profundizar el proyecto en sí. Se plantea remarcar lo mecánico de las personas y lo humano de las máquinas en una instalación de recorridos regulares y producciones algorítmicas.",
           autors: "Ignacio Buioli",
           ano: "2013",
           tags: "generativo, espacio, recorrido, matemático, óptico, lupas",
           url: "https://player.vimeo.com/video/82014903?title=0&amp;byline=0&amp;portrait=0&amp;color=d350eb",
           url2: "",
           img: ""
         };
         break;
       case 'contamirama':
         this.detalles = {
           titulo: "Contamirama",
           destacado: "",
           tecnica: "Ecosistema + Visualización de Datos",
           descripcion: "Instalación Interactiva que inspecciona las relaciones entre los ecosistemas de vida en rios con grandes índices de contaminación (Río de La Plata, Buenos Aires). Mediante una interfaz lúdica, la instalación funciona también como visualización de datos de los niveles de toxicidad del agua a través de los años. Realizado para la materia Informática Aplicada 2 de la carrera Artes Multimediales.",
           autors: "Evangelina Lepore, Mariano Ferle, Ignacio Buioli",
           ano: "2014",
           tags: "contaminación, ecosistema, visualización, datos, lúdico",
           url: "https://player.vimeo.com/video/88785364?color=d350eb&title=0&byline=0&portrait=0",
           url2: "",
           img: ""
         };
         break;
       case 'la-jaula-de-ideas':
         this.detalles = {
           titulo: "La Jaula de Ideas",
           destacado: "",
           tecnica: "Instalación Sonora",
           descripcion: "Instalación objetual, sonora e interactiva. Indaga sobre el encierro interno y las relaciones digitales como salida a esa especie de 'soledad interna' que a través de las nuevas formas sociales-digitales padecen muchas personas.",
           autors: "Evangelina Lepore, Mariano Ferle, Germán Lamas, Ignacio Buioli",
           ano: "2014",
           tags: "conceptual, jaula, sonora, sombra, luz, grabación, voz",
           url: "https://player.vimeo.com/video/102765037?color=d350eb&title=0&byline=0&portrait=0",
           url2: "",
           img: ""
         };
         break;
       case 'interna':
         this.detalles = {
           titulo: "Interna",
           destacado: "",
           tecnica: "Interfaces Corporales",
           descripcion: "Instalación lumínico-sonora donde la acción de 'no ver' produce la interacción. El parpadeo se convierte en un ciclo sustancial para la reacción inmersiva de cerrar los ojos ante un espejo.",
           autors: "Germán Lamas, Gabriel Vich, Ignacio Buioli",
           ano: "2014",
           tags: "electrónica, geoda, luz, espejo, parpadeo, ojo, visión",
           url: "https://player.vimeo.com/video/111876159?color=d350eb&title=0&byline=0&portrait=0",
           url2: "",
           img: ""
         };
         break;
       case 'titono':
         this.detalles = {
           titulo: "Títono",
           destacado: "",
           tecnica: "Interfaces Coporales",
           descripcion: "Instalación interactiva donde una estructura de alambre -oficiando de un pequeño árbol- se alimenta del aliento de los interactores dentro de un frasco de vidrio. Dependiendo la variación y cantidad de aliento otorgado al sistema, este crece hasta una determinada altura mientras sus frutos laten simulando un pulso cardíaco que refleja el aliento otorgado. Realizado para la materia Artes Multimediales 4 de la carrera Artes Multimediales.",
           autors: "Ignacio Buioli",
           ano: "2014",
           tags: "electrónica, vida, artificial, aliento, soplido, respiración",
           url: "https://player.vimeo.com/video/113773237?color=d350eb&title=0&byline=0&portrait=0",
           url2: "",
           img: ""
         };
         break;
       case 'humbre':
         this.detalles = {
           titulo: "Humbre",
           destacado: "",
           tecnica: "Fenómenos Físicos + Realidad Aumentada",
           descripcion: "Instalación interactiva -no reactiva- en la cual un ecosistema tangible se alimenta de las presencias intangibles que lo rodean. Utiliza los datos de los campos electromagnéticos que lo presentes en el espacio, mediante un sensor construido con una antena de radio y una placa Arduino. A su vez, su realidad es aumentada a través de su sombra digital, la cual se muestra amenazada o cómoda, dependiendo el tipo de alimento invisible que reciba. Realizado para la materia Artes Multimediales 4 de la carrera Artes Multimediales.",
           autors: "Ignacio Buioli",
           ano: "2014",
           tags: "electrónica, incubadora, vida, artificial, EMF, electromagnético",
           url: "https://player.vimeo.com/video/113793304?color=d350eb&title=0&byline=0&portrait=0",
           url2: "",
           img: ""
         };
         break;
       case 'exanime-inanime':
         this.detalles = {
           titulo: "Exánime Inánime",
           destacado: "",
           tecnica: "Interfaces Corporales + Electrónica Digital",
           descripcion: "Instalación interactiva que procesa el aire donado a una máquina de nebulizaciones desarmada sobre una mesa de vidrio. Mediante la donación de aire a una máquina cuya utilidad es la opuesta, se plantea recorrer una a una sus piezas con una proyección nadir (de abajo hacia arriba), proyectando el resultado de sus sombras y reflejos en el techo. A su vez, la consutrucción sonora es interactiva a los datos del aliento (intensidad y temperatura) basado en la extracción de sonido de cada uno de sus componentes individuales. Realizado para la materia Audiovisión 2 de la carrera Artes Multimediales.",
           autors: "Federico Barabino, Ignacio Buioli",
           ano: "2015",
           tags: "aliento, instalación, interactiva",
           url: "https://player.vimeo.com/video/147369996?color=d350eb&title=0&byline=0&portrait=0",
           url2: "",
           img: ""
         };
         break;
       case 'aniuqam':
         this.detalles = {
           titulo: "Aniuqám",
           destacado: "-Proyecto de Graduación para la Licenciatura en Artes Multimediales",
           tecnica: "Electrónica Digital",
           descripcion: "«Aniuqám» es una instalación interactiva que explora y reflexiona sobre la relación del tiempo empleado por los seres humanos en el funcionamiento de las máquinas. Un dispositivo de características médicas permite la transfusión de vitalidad y tiempo a una computadora completamente desmantelada. Mientras más tiempo se permanece, más vitalidad se le otorga. De ese modo, la máquina se alimenta del tiempo donado, produciendo respuestas relacionadas con la vitalidad que adquiere. A medida que el interactor decide permanecer más tiempo, cada conjunto de procesos obtiene un nuevo nivel de complejidad; consiguiendo que la persona se comporte como un simple reloj de pulsos y el artificio como un complejo sistema viviente. Al finalizar los procesos, productos de la donación inicial, estos dan energía a una pantalla donde se muestra el poema «Apostilla» del poeta portugués Fernando Pessoa, poema que será interrumpido si aquella donación de vitalidad fue escasa.",
           autors: "Ignacio Buioli, dirigido por Andrea Sosa",
           ano: "2016",
           tags: "aniuqám, máquina, donación, instalación, interactiva",
           url: "https://player.vimeo.com/video/196964690?color=d350eb&title=0&byline=0&portrait=0",
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
        slug: 'i/'+params['id']
      })
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
