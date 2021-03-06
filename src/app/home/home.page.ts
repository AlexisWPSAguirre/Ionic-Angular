import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /* Variables que deben ser enlazadas a los input con ngmodel*/
  nombre = null;
  apellido = null;
  celular = null;
  email = null;

  usuarios = [];
  constructor() {}
  guardarDatos()
  {
    /* Arreglo de objetos JS
    Y en python: Lista de diccionario  */
    this.usuarios.push(
      {
        nombre: this.nombre
      }
    )
    /* This funciona al igual que self en python
    Referencia la misma función */
    console.log(this.usuarios)
    /* Se borrará en el pint los datos */
    this.nombre = ""
  }

}
