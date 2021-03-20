import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parcial-i',
  templateUrl: './parcial-i.page.html',
  styleUrls: ['./parcial-i.page.scss'],
})
export class ParcialIPage implements OnInit {
  operacion = []
  numbers = []
  input = ""
  bandera = 0
  
  Operadores(boton)
  {
    if (this.bandera == 1)
      {
        this.bandera = 0
      }
    this.input = this.input + boton
    switch(boton)
    {
      case '+':
        this.operacion.push('+')
      break;
      case '-':
        this.operacion.push('-')
      break;
      case '*':
        this.operacion.push('*')
      break;
      case '/':
        this.operacion.push('/')
      break;
      default:
      break;
    }
  }
  concatenar(boton)
  {
    if (this.bandera == 1)
    { 
      this.input = ""
      this.numbers = []
      this.operacion = []
    }
    this.input = this.input + boton
    this.numbers.push(boton)
  } 

  borrar()
  {
    let char = this.input.slice(-1)
    this.input = this.input.slice(0,-1)
    console.log(this.input)
    switch(char)
    {
      case '+' || '-' || '/' || '*':
        console.log(this.operacion[this.operacion.length-1])
        this.operacion.splice(this.operacion.length,1)
        console.log(this.operacion)
      break;

      default:
        console.log(this.numbers[this.numbers.length-1])
        this.numbers.splice(this.numbers.length-1,1)
        console.log(this.numbers)
      break;
    }
  }
  operar()
  {
    let resultado = 0
    switch(this.operacion[0])
      {
        case '+':
          resultado = this.numbers[0] + this.numbers[1]
        break;
        case '-':
          resultado = this.numbers[0] - this.numbers[1]
        break;
        case '*':
          resultado = this.numbers[0] * this.numbers[1]
        break;
        case '/':
          resultado = this.numbers[0] / this.numbers[1]
        break;
      }
    for(let i=1; i< this.operacion.length; i++)
    {
      switch(this.operacion[i])
      {
        case '+':
          resultado = resultado + this.numbers[i+1]
        break;
        case '-':
          resultado = resultado - this.numbers[i+1]
        break;
        case '*':
          resultado = resultado * this.numbers[i+1]
        break;
        case '/':
          resultado = resultado / this.numbers[i+1]
        break;
      }
    }
    this.input = ""+resultado
    this.bandera = 1
  }
  constructor() { }

  ngOnInit() {
  }

}
