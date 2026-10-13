import { Component } from '@angular/core';
import { Textos } from '../textos';
import { TituloSeccion } from '../titulo-seccion/titulo-seccion';
import { Tarjeta } from '../tarjeta/tarjeta';

@Component({
  selector: 'app-certificaciones',
  imports: [TituloSeccion, Tarjeta],
  templateUrl: './certificaciones.html',
  styleUrl: './certificaciones.css',
})
export class Certificaciones {
  estudios = [
    {
      titulo: 'Desarrollo de Software',
      lugar: 'ITSE',
      enCurso: true,
    },
  ];

  constructor(public textos: Textos) {}
}
