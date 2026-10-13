import { Component } from '@angular/core';
import { Textos } from '../textos';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  // El año se calcula solo, así no hay que cambiarlo cada enero.
  // Se guarda como texto porque se usa para reemplazar {year}.
  anio = String(new Date().getFullYear());

  constructor(public textos: Textos) {}
}
