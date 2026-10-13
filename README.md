# Portfolio

My personal developer portfolio

**Stack:** Angular 21 + Firebase

Portafolio personal de Carlos Mercado. Sitio de una sola página, bilingüe
(español e inglés), con formulario de contacto que guarda los mensajes en
Firestore.

---

## Cómo correrlo en tu computadora

Necesitas Node.js 20 o superior.

```bash
npm install
npm start
```

Luego abre `http://localhost:4200`.

Otros comandos:

```bash
ng build     # compila para producción, el resultado queda en dist/
ng test      # corre las pruebas
```

---

## Estructura del proyecto

```
public/i18n/          Los textos del sitio: es.json e en.json
src/app/
  textos.ts           Servicio que carga el diccionario y cambia de idioma
  firebase.ts         Configuración de Firebase (hay que llenarla)
  titulo-seccion/     Componente reutilizable: el título de cada sección
  tarjeta/            Componente reutilizable: la caja blanca con borde
  header/ footer/     Encabezado y pie de página
  home/               La portada y el orden de las secciones
  sobre-mi/ stack/ proyectos/ experiencia/
  certificaciones/ testimonios/ enfoque/ contacto/
src/styles.css        Colores y clases reutilizables de todo el sitio
```

Las clases CSS que se repiten (`.seccion`, `.contenedor`, `.boton`, `.grid`,
`.chip`, `.campo`) están en `src/styles.css`. Cada componente solo tiene el CSS
que es suyo.

---

## Textos e idiomas

Todos los textos salen de `public/i18n/es.json` y `public/i18n/en.json`. Los dos
archivos tienen exactamente las mismas claves. El botón ES/EN del encabezado
cambia entre uno y otro.

Para cambiar un texto del sitio, se edita el JSON, no el HTML.

---

## Configurar Firebase

El formulario de contacto guarda los mensajes en Firestore, pero primero hay que
conectar el proyecto.

### 1. Crear el proyecto

1. Entra a <https://console.firebase.google.com> y crea un proyecto.
2. Dentro del proyecto, agrega una app **Web** (el icono `</>`).
3. Firebase te muestra un bloque de configuración. Cópialo.

### 2. Pegar la configuración

Abre `src/app/firebase.ts` y reemplaza los valores que dicen `PEGAR_AQUI` por
los de tu proyecto.

Abre `.firebaserc` y pon ahí el ID de tu proyecto.

### 3. Crear la base de datos

En la consola de Firebase, entra a **Firestore Database** y créala. Elige el
modo de producción: las reglas de seguridad de este repo
(`firestore.rules`) ya permiten lo justo, que es crear mensajes y nada más.

---

## Desplegar en Firebase Hosting

Una sola vez, instala la herramienta de Firebase y entra a tu cuenta:

```bash
npm install -g firebase-tools
firebase login
```

Cada vez que quieras publicar:

```bash
ng build
firebase deploy
```

El comando sube la carpeta `dist/portfolio-dev/browser` y las reglas de
Firestore. Al terminar te da la dirección del sitio.

Para subir solo una parte:

```bash
firebase deploy --only hosting
firebase deploy --only firestore:rules
```

---

## Pendiente de llenar

Los textos entre corchetes son marcadores que hay que reemplazar:

- `src/app/contacto/contacto.ts` — correo, GitHub y LinkedIn
- `src/app/experiencia/experiencia.ts` — empresas, puestos, fechas y logros
- `src/app/certificaciones/certificaciones.ts` — certificaciones y estudios
- `src/app/testimonios/testimonios.ts` — testimonios reales
- `src/app/sobre-mi/sobre-mi.html` — la foto y los dos números
- `src/app/firebase.ts` y `.firebaserc` — la configuración de Firebase
