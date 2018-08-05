import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

export const router: Routes = [
    { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
    { path: '', component: AppComponent },
    { path: 'portfolio', component: HomeComponent },
    { path: 'audiovisuales', component: AudiovisualesComponent, children: [
      { path: 'a/:id', component: ADetailComponent },
    ] },
    { path: 'visuales', component: VisualesComponent , children: [
      { path: 'v/:id', component: VDetailComponent },
    ] },
    { path: 'instalaciones', component: InstalacionesComponent , children: [
      { path: 'i/:id', component: IDetailComponent },
    ] },
    { path: 'performances', component: PerformancesComponent , children: [
      { path: 'p/:id', component: PDetailComponent },
    ] },
    { path: 'textos', component: TextosComponent , children: [
      { path: 't/:id', component: TDetailComponent },
    ] },
    { path: 'hipertextos', component: HipertextosComponent, children: [
      { path: 'h/:id', component: HDetailComponent },
    ] },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: 'error', }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
