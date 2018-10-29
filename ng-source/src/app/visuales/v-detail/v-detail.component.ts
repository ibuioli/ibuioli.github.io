import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { Detalles } from '@core/details';
import { SeoService } from '@core/seo';

@Component({
  selector: 'app-v-detail',
  templateUrl: './v-detail.component.html',
  styleUrls: ['./v-detail.component.scss']
})
export class VDetailComponent implements OnInit, OnDestroy {
  public sub: any;
  public detalles: Detalles;
  public ind: number;
  public imgs: any = [];

  constructor(private route: ActivatedRoute, private titleService: Title, private seo: SeoService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

       switch(params['id']) {
         case 'x-en-un-suelto':
           this.detalles = {
             titulo: "X en un Suelto",
             destacado: "",
             tecnica: "LibroObjecto + Textura tipográfica",
             descripcion: "Empleando como base el libro X en un Suelto del escritor Edgar Allan Poe, se busca producir un libro objeto donde -además del texto original- se narre la historia mediante técnicas tipográfica y materiales. Se realizó enteramente en madera balsa y las impresiones en filmina transparente, papel de calcar y papel manteca; con objetivo de producir superposiciones y profundidad. Realizado para la materia Proyecto Visual 2 de la carrera Artes Multimediales.",
             autors: "Ignacio Buioli",
             ano: "2011",
             tags: "librobjecto, libro, objecto, poe",
             url: "lo/big/lo",
             url2: "",
             img: "8"
           };
          break;
         case 's-afiches':
           this.detalles = {
             titulo: "Sistema de Afiches, película Macbeth",
             destacado: "-Presentado en Muestra del ATAM-IUNA, 2011. Museo Ernesto de la Cárcova, Buenos Aires.",
             tecnica: "Fotografía, Collage, Ilustración, Cómic",
             descripcion: "Utilizando la película Macbeth de Roman Polanski, la propuesta se reduce a la producción de cuatro afiches con distintas técnicas gráficas. Realizado para la materia Proyecto Visual 2 de la carrera Artes Multimediales.",
             autors: "Ignacio Buioli",
             ano: "2011",
             tags: "afiches, macbeth, fotografía, ilustración",
             url: "mac/big/mac",
             url2: "",
             img: "4"
           };
          break;
         case 's-retratos':
           this.detalles = {
             titulo: "Sistema de Retratos",
             destacado: "",
             tecnica: "Dibujo con grafito, Textura tipográfica, Dibujo con Plano, Dibujo con Línea, Icónico",
             descripcion: "Mediante la captura de cinco fotografías diferentes, se busca pasarlas a cinco íconos que hagan referencia mediante el uso de cinco técnicas muy distintas, entre las que se incluye el dibujo con grafito, la vectorización digital y el uso de tipografías. Realizado para la materia Proyecto Visual 2 de la carrera Artes Multimediales.",
             autors: "Ignacio Buioli",
             ano: "2011",
             tags: "rostro, ilustración",
             url: "retra/big/retra",
             url2: "",
             img: "5"
           };
          break;
         case 's-imagenes':
           this.detalles = {
             titulo: "Sistema de Imágenes",
             destacado: "",
             tecnica: "Fotografía, Cambio de Paleta, Cambio de Morfología, Anamorfosis, Collage, A la manera de Fontcuberta",
             descripcion: "Realizado para el Curso Pre-Universitario de la carrera Artes Multimediales (UNA), se propone la producción de distintas imágenes utilizando los mismos elementos (vaso, botella y mesa).",
             autors: "Ignacio Buioli",
             ano: "2010",
             tags: "imágenes, botella, vaso, mesa",
             url: "cpu/big/cpu",
             url2: "",
             img: "10"
           };
          break;
      }

      //Pasar cantidad de imágenes
      this.ind = +this.detalles.img;
      for(var i = 0; i < this.ind; i++){
        this.imgs[i] = i;
      }
      //Cambiar Título
      this.titleService.setTitle(document.title+": "+this.detalles.titulo);
      //Cambiar SEO
      this.seo.generateTags({
        title: document.title,
        description: this.detalles.descripcion,
        slug: 'v/'+params['id']
      })
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
