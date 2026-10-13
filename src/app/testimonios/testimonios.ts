import { Component } from '@angular/core';
import { Textos } from '../textos';
import { TituloSeccion } from '../titulo-seccion/titulo-seccion';
import { Tarjeta } from '../tarjeta/tarjeta';

@Component({
  selector: 'app-testimonios',
  imports: [TituloSeccion, Tarjeta],
  templateUrl: './testimonios.html',
  styleUrl: './testimonios.css',
})
export class Testimonios {
  // TODO: reemplazar con testimonios reales de companeros, jefes o clientes
  comentarios = [
    {
      texto: '[Testimonio: que problema resolviste y como fue trabajar contigo. Dos o tres lineas bastan.]',
      nombre: '[Nombre]',
      cargo: '[Cargo - Empresa]',
    },
    {
      texto: '[Segundo testimonio. Si viene de un cliente, lo ideal es que mencione el resultado que obtuvo.]',
      nombre: '[Nombre]',
      cargo: '[Cargo - Empresa]',
    },
    {
      texto: '[Tercer testimonio. Tambien sirve una recomendacion de LinkedIn recortada a lo esencial.]',
      nombre: '[Nombre]',
      cargo: '[Cargo - Empresa]',
    },
  ];

  constructor(public textos: Textos) {}
}
