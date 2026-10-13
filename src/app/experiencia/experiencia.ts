import { Component } from '@angular/core';
import { Textos } from '../textos';
import { TituloSeccion } from '../titulo-seccion/titulo-seccion';
import { Tarjeta } from '../tarjeta/tarjeta';

@Component({
  selector: 'app-experiencia',
  imports: [TituloSeccion, Tarjeta],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css',
})
export class Experiencia {
  trabajos = [
    {
      puesto: 'Operaciones y logística en soporte técnico',
      empresa: 'RM Consultores',
      actual: true,
      logro: '',
    },
  ];

  constructor(public textos: Textos) {}
}
