import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {

  constructor(private meta: Meta) { }

  generateTags(config) {
    //Default Values
    config = {
      title: 'Ignacio Buioli - Portfolio',
      description: 'Portfolio Personal de Ignacio Buioli, Licenciado en Artes Multimediales. Especialización en programación interactiva y tecnología',
      image: 'assets/img/favicon.png',
      slug: '',
      ...config
    }

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@ibuioli' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'ibuioli' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `https://ibuioli.com.ar/${config.slug}` });
  }

}
