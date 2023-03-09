import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';

@NgModule({
  declarations: [
    AppComponent,
     FormularioBasicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [  FormularioBasicoComponent ]
})
export class AppModule { }
