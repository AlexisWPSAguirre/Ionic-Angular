import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {
  num1 = null;
  num2 = null;
  operacion = null;
  r = null;
  strOperacion = null;
  mensaje = null;
  
  
  operar(){
    let n1 = parseInt(this.num1)
    let n2 = parseInt(this.num2)
    let n3 = parseInt(this.r)
    switch(this.operacion)
    {
      case '+':
        this.strOperacion = 'suma'
        this.r = n1 + n2
      break;

      case '-':
        this.strOperacion = 'resta'
        this.r = n1 - n2
      break;

      case '*':
        this.strOperacion = 'multiplicación'
        this.r = n1 * n2
      break;

      case '/':
        this.strOperacion = 'división'
        this.r = n1 / n2
      break;
    }
    this.mensaje = `El resultado de la ${this.strOperacion} entre ${this.num1} y ${this.num2} es igual a ${this.r}` ;
  } 
  constructor() { }

  ngOnInit() {
  }

}
