import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// ============================================================
// CONFIGURACION DE FIREBASE
//
// Estos valores salen de la consola de Firebase:
// Configuracion del proyecto > Tus apps > Configuracion del SDK
//
// No son claves secretas: cualquier app web de Firebase las manda
// al navegador del visitante. Lo que de verdad protege los datos
// son las reglas de seguridad, que estan en firestore.rules.
// ============================================================

export const firebaseConfig = {
  apiKey: 'AIzaSyDT5N6yO1erLrgGW2V7tUzxfBw5_N0fnDo',
  authDomain: 'portafio-programador.firebaseapp.com',
  projectId: 'portafio-programador',
  storageBucket: 'portafio-programador.firebasestorage.app',
  messagingSenderId: '608367955637',
  appId: '1:608367955637:web:49a1e30de1b7249489b8fc',
  measurementId: 'G-RFG87EL5C4',
};

// Arranca Firebase y deja lista la base de datos.
// No usamos Analytics en el sitio, por eso no se importa aqui.
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
