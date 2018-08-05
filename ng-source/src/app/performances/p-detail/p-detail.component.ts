import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { Detalles } from '../../detalles';

@Component({
  selector: 'app-p-detail',
  templateUrl: './p-detail.component.html',
  styleUrls: ['./p-detail.component.css']
})
export class PDetailComponent implements OnInit, OnDestroy {
  public sub: any;
  public detalles: Detalles;
  public url: SafeUrl;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private titleService: Title) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

       switch(params['id']) {
         case 'bit70':
           this.detalles = {
             titulo: "bit(70)",
             destacado: "",
             tecnica: "Generación Algorítmica + Procesamiento en Tiempo Real",
             descripcion: "Performática Visual donde se procesan en tiempo real las imágenes creadas de forma algorítimica por la computadora. A su vez, la luz de los proyectores es intervenida con dispositivos ópticos.",
             autors: "Mariano Ferle, Ignacio Buioli",
             ano: "2013",
             tags: "visual, proyección, generativo, procesamiento",
             url: "https://player.vimeo.com/video/78947437?title=0&amp;byline=0&amp;portrait=0&amp;color=5446d9",
             url2: "",
             img: ""
           };
          break;
        case 'la-fabrica-de-alvaro-de-campos':
          this.detalles = {
            titulo: "La Fábrica de Álvaro de Campos",
            destacado: "-Work in progress",
            tecnica: "Electrónica Digital",
            descripcion: "Performática teatral donde un declamador y un actor interpretan el poema Oda Triunfal de Fernando Pessoa. La lectura del declamador es intervenida por el uso de motores vibrantes sobre el cuerpo, mientras que los movimientos del actor son interrumpidos por medio de descargas electricas en zonas puntuales del cuerpo.",
            autors: "Ignacio Buioli",
            ano: "2014",
            tags: "electrónica, teatro, corporal",
            url: "",
            url2: "",
            img: "assets/cont/fabrica.jpg"
          };
         break;
      }

      //URL Segura
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.detalles.url);
      //Cambiar Título
      this.titleService.setTitle(document.title+": "+this.detalles.titulo);
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
