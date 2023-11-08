import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//Audiovisuales
import { AudiovisualesComponent } from './audiovisuales/audiovisuales.component';
import { ADetailComponent } from './audiovisuales/a-detail/a-detail.component';
//Visuales
import { VisualesComponent } from './visuales/visuales.component';
import { VDetailComponent } from './visuales/v-detail/v-detail.component';
//Textos
import { TextosComponent } from './textos/textos.component';
import { TDetailComponent } from './textos/t-detail/t-detail.component';
//Hipertextos
import { HipertextosComponent } from './hipertextos/hipertextos.component';
import { HDetailComponent } from './hipertextos/h-detail/h-detail.component';
//Instalaciones
import { InstalacionesComponent } from './instalaciones/instalaciones.component';
import { IDetailComponent } from './instalaciones/i-detail/i-detail.component';
//Performances
import { PerformancesComponent } from './performances/performances.component';
import { PDetailComponent } from './performances/p-detail/p-detail.component';
//Otros
import { ErrorComponent } from './error/error.component';

//Routers
import { AppRouter } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    AudiovisualesComponent,
    InstalacionesComponent,
    VisualesComponent,
    TextosComponent,
    HipertextosComponent,
    PerformancesComponent,
    HomeComponent,
    ErrorComponent,
    //Detalles
    ADetailComponent,
    IDetailComponent,
    TDetailComponent,
    HDetailComponent,
    PDetailComponent,
    VDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRouter,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
