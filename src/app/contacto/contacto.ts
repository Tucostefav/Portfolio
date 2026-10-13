import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { Textos } from '../textos';
import { TituloSeccion } from '../titulo-seccion/titulo-seccion';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule, TituloSeccion],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  // Lo que escribe el visitante en el formulario
  nombre = '';
  correo = '';
  mensaje = '';

  // En que paso va el envio: '', 'enviando', 'exito' o 'error'.
  // Es una señal para que la pantalla se actualice sola al cambiar.
  estado = signal('');

  // El correo no se pone aqui a proposito: si se escribe en la pagina,
  // los robots que rastrean la web lo recogen y llega spam.
  // Para escribirme esta el formulario, que guarda el mensaje en Firestore.
  redes = {
    github: 'https://github.com/Tucostefav',
    linkedin: 'https://www.linkedin.com/in/carlos-mercado-b3b09b1b0',
  };

  constructor(public textos: Textos) {}

  async enviar() {
    this.estado.set('enviando');

    try {
      // Guarda el mensaje en la coleccion "mensajes" de Firestore
      await addDoc(collection(db, 'mensajes'), {
        nombre: this.nombre,
        correo: this.correo,
        mensaje: this.mensaje,
        fecha: new Date(),
      });
      this.estado.set('exito');
    } catch (error) {
      console.error('No se pudo guardar el mensaje:', error);
      this.estado.set('error');
    }
  }
}
