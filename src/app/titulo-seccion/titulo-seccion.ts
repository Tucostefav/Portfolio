import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-seccion',
  imports: [],
  templateUrl: './titulo-seccion.html',
  styleUrl: './titulo-seccion.css',
})
export class TituloSeccion {
  // El texto que se muestra. Se lo pasa quien use el componente:
  // <app-titulo-seccion texto="Proyectos destacados"></app-titulo-seccion>
  @Input() texto = '';
}
