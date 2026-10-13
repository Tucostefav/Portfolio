import { Component } from '@angular/core';
import { Textos } from '../textos';
import { TituloSeccion } from '../titulo-seccion/titulo-seccion';
import { Tarjeta } from '../tarjeta/tarjeta';

@Component({
  selector: 'app-proyectos',
  imports: [TituloSeccion, Tarjeta],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {
  // Los nombres de las tecnologias y las direcciones web no se traducen,
  // asi que viven aqui y no en el diccionario.
  // Cuando "sitio" esta vacio, la tarjeta no muestra enlace.
  proyectos = {
    encarga: {
      tecnologias: ['PHP', 'JavaScript', 'MariaDB', 'Bootstrap'],
      sitio: 'https://myencarga.com',
      enDesarrollo: false,
    },
    valtix: {
      tecnologias: ['Node.js', 'Angular', 'Firebase', 'MySQL'],
      sitio: '',
      enDesarrollo: true,
    },
    workOrders: {
      tecnologias: ['PHP', 'JavaScript', 'MariaDB', 'Bootstrap'],
      sitio: '',
      enDesarrollo: false,
    },
    vantia: {
      tecnologias: ['Angular', 'Firebase', 'JavaScript', 'Bootstrap'],
      sitio: 'https://vantiastudiopa.com',
      enDesarrollo: false,
    },
  };

  constructor(public textos: Textos) {}
}
