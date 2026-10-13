import { Component } from '@angular/core';
import { Textos } from '../textos';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Se declara public para poder usarlo en el HTML
  constructor(public textos: Textos) {}
}
