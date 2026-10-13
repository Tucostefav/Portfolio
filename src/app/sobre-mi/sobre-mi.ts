import { Component } from '@angular/core';
import { Textos } from '../textos';
import { TituloSeccion } from '../titulo-seccion/titulo-seccion';
import { Tarjeta } from '../tarjeta/tarjeta';

@Component({
  selector: 'app-sobre-mi',
  imports: [TituloSeccion, Tarjeta],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  constructor(public textos: Textos) {}
}
