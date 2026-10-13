import { Component } from '@angular/core';
import { Textos } from '../textos';
import { SobreMi } from '../sobre-mi/sobre-mi';
import { Stack } from '../stack/stack';
import { Proyectos } from '../proyectos/proyectos';
import { Experiencia } from '../experiencia/experiencia';
import { Certificaciones } from '../certificaciones/certificaciones';
import { Testimonios } from '../testimonios/testimonios';
import { Enfoque } from '../enfoque/enfoque';
import { Contacto } from '../contacto/contacto';

@Component({
  selector: 'app-home',
  imports: [
    SobreMi,
    Stack,
    Proyectos,
    Experiencia,
    Certificaciones,
    Testimonios,
    Enfoque,
    Contacto,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public textos: Textos) {}
}
