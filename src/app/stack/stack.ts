import { Component } from '@angular/core';
import { Textos } from '../textos';
import { TituloSeccion } from '../titulo-seccion/titulo-seccion';
import { Tarjeta } from '../tarjeta/tarjeta';

@Component({
  selector: 'app-stack',
  imports: [TituloSeccion, Tarjeta],
  templateUrl: './stack.html',
  styleUrl: './stack.css',
})
export class Stack {
  constructor(public textos: Textos) {}
}
