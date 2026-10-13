import { Component } from '@angular/core';
import { Textos } from '../textos';

@Component({
  selector: 'app-enfoque',
  imports: [],
  templateUrl: './enfoque.html',
  styleUrl: './enfoque.css',
})
export class Enfoque {
  constructor(public textos: Textos) {}
}
