import { ArrayType } from '@angular/compiler';
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
        this.operacion.push({op: '+', value: 2})
      break;
      case '-':
        this.operacion.push({op: '-', value: 2})
      break;
      case '*':
        this.operacion.push({op: '*', value: 1})
      break;
      case '/':
        this.operacion.push({op: '/', value: 1})
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
    switch(char)
    {
      case '+' || '-' || '/' || '*':
        this.operacion.splice(this.operacion.length,1)
      break;

      default:
        this.numbers.splice(this.numbers.length-1,1)
      break;
    }
  }

  operar()
  {
    this.operacion.sort(function(a,b) {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    })
    let resultado = 0
    switch(this.operacion[0]['op'])
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
