import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// ============================================================
// CONFIGURACION DE FIREBASE
//
// TODO: reemplazar estos valores por los de tu proyecto.
// Se sacan de: consola de Firebase > Configuracion del proyecto
// > Tus apps > Configuracion del SDK > Config
//
// Estas claves no son secretas: viajan al navegador en cualquier
// app web de Firebase. Lo que protege los datos son las reglas
// de seguridad, que estan en el archivo firestore.rules.
// ============================================================

export const firebaseConfig = {
  apiKey: 'PEGAR_AQUI',
  authDomain: 'PEGAR_AQUI.firebaseapp.com',
  projectId: 'PEGAR_AQUI',
  storageBucket: 'PEGAR_AQUI.firebasestorage.app',
  messagingSenderId: 'PEGAR_AQUI',
  appId: 'PEGAR_AQUI',
};

// Arranca Firebase y deja lista la base de datos
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
