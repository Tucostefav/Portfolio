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
  // TODO: reemplazar con la experiencia laboral real
  trabajos = [
    {
      puesto: '[Puesto]',
      empresa: '[Empresa]',
      periodo: '[2023 - Actual]',
      logro: '[Logro medible: qué construiste y qué mejoró]',
    },
    {
      puesto: '[Puesto]',
      empresa: '[Empresa]',
      periodo: '[2021 - 2023]',
      logro: '[Logro medible]',
    },
    {
      puesto: '[Puesto]',
      empresa: '[Empresa]',
      periodo: '[2019 - 2021]',
      logro: '[Logro medible]',
    },
  ];

  constructor(public textos: Textos) {}
}
