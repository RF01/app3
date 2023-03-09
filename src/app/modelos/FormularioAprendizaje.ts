export class FormularioAprendizaje{
     tipo : string ="TipoDelque sea";
     nombre: string ="Juan";

    constructor(tipo: string ,nombre:string){
        this.tipo = tipo;
        this.nombre = nombre;
    }

    // constructor(){
       
    // }

    getTipo() :string{
        return this.tipo;
    }
    getNombre() :string{
        return this.nombre;
    }

}