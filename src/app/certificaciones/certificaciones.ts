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
  // TODO: reemplazar con las certificaciones reales
  certificados = [
    { nombre: '[Nombre de la certificación]', emisor: '[Emisor]', anio: '[Año]' },
    { nombre: '[Nombre de la certificación]', emisor: '[Emisor]', anio: '[Año]' },
  ];

  // TODO: reemplazar con los estudios reales
  estudios = [
    { titulo: '[Título universitario]', lugar: '[Universidad]', anio: '[Año - Año]' },
    { titulo: '[Curso o especialización]', lugar: '[Institución]', anio: '[Año]' },
  ];

  constructor(public textos: Textos) {}
}
