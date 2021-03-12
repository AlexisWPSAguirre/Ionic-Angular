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
  id = null;
  usuarios = [];
  guardarDatos()
  {
    console.log(this.id)
    if(this.id != null)
    {
      this.usuarios[this.id]["nombre"] = this.nombre
      this.usuarios[this.id]["apellido"] = this.apellido
      this.usuarios[this.id]["celular"] = this.celular
      this.usuarios[this.id]["email"] = this.email
    }
    else{
      
      /* Arreglo de objetos JS
      Y en python: Lista de diccionario  */
  
      this.usuarios.push(
        {
          nombre: this.nombre,
          apellido: this.apellido,
          celular: this.celular,
          email: this.email,
        }
      ) 
    }
    this.nombre = ""
    this.apellido = ""
    this.celular = ""
    this.email = ""
    this.id = null
    /* This funciona al igual que self en python
    Referencia la misma función */
    console.log(this.usuarios)
    /* Se borrará en el pint los datos */
  }

  editarRegistro(usuario){

    this.nombre = usuario["nombre"]
    this.apellido = usuario["apellido"]
    this.celular = usuario["celular"]
    this.email = usuario["email"]

    this.id = this.usuarios.indexOf(usuario)
    this.usuarios[this.id]["nombre"] = this.nombre
    this.usuarios[this.id]["apellido"] = this.apellido
    this.usuarios[this.id]["celular"] = this.celular
    this.usuarios[this.id]["email"] = this.email
    
  }
  
  eliminarRegistro(usuario){
    this.id = this.usuarios.indexOf(usuario)
    this.usuarios.splice(this.id,1)
  }
  
  constructor() {}
}
