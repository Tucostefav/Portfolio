import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class Textos {
  // Idioma que se está mostrando: 'es' o 'en'
  idioma = signal('es');

  // Aquí se guarda el contenido del archivo JSON que se cargó.
  // Empieza en null porque todavía no ha llegado.
  datos = signal<any>(null);

  constructor(private http: HttpClient) {
    this.cargar('es');
  }

  // Pide el archivo es.json o en.json y guarda lo que venga
  cargar(idioma: string) {
    this.http.get('/i18n/' + idioma + '.json').subscribe((respuesta) => {
      this.datos.set(respuesta);
      this.idioma.set(idioma);
      document.documentElement.lang = idioma;
    });
  }

  // Cambia de español a inglés y al revés
  cambiarIdioma() {
    if (this.idioma() === 'es') {
      this.cargar('en');
    } else {
      this.cargar('es');
    }
  }
}
