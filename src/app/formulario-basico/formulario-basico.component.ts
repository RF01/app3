import { Component } from '@angular/core';
import { FormularioAprendizaje } from '../modelos/FormularioAprendizaje';

@Component({
  selector: 'app-formulario-basico',
  templateUrl: './formulario-basico.component.html',
  styleUrls: ['./formulario-basico.component.css']
})
export class FormularioBasicoComponent {
  public nombre : string ="Introduce un Nombre"
  //  tipo!: Object;
  public tipo;

  constructor(){
    // this.tipo = new FormularioAprendizaje("formularioSimple_____tring", "nombre___string")
    this.tipo = new FormularioAprendizaje("Juan","elquesea");
  }

  pulsar(value:string): void{
    console.log("has pulsado")
  }
}
