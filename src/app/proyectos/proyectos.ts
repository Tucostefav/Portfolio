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
  // Los nombres de las tecnologias no se traducen,
  // asi que viven aqui y no en el diccionario
  tecnologias = {
    encarga: ['PHP', 'JavaScript', 'MariaDB', 'Bootstrap'],
    valtix: ['Node.js', 'Angular', 'Firebase', 'MySQL'],
    workOrders: ['PHP', 'JavaScript', 'MariaDB', 'Bootstrap'],
    vantia: ['Angular', 'Firebase', 'JavaScript', 'Bootstrap'],
  };

  constructor(public textos: Textos) {}
}
