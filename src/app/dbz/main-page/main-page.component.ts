import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{

  personajes: Personaje[] =[
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    },
  ]

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 13000,
  }

  agregarNuevoPersonaje( nuevoPersonaje: Personaje){
    console.log(nuevoPersonaje);
    this.personajes.push(nuevoPersonaje);
  }

}
