// Importa le librerie Firebase necessarie
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, DataSnapshot } from "firebase/database";
import { DB } from "./abstractions/Db";

// Configurazione Firebase (aggiungi qui le tue configurazioni specifiche)
const firebaseConfig = {
  databaseURL: "https://upcity-efe8f-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Funzione per inizializzare Firebase
const app = initializeApp(firebaseConfig);

// Inizializza il database Firebase
const database = getDatabase(app);

// Funzione per scrivere dati nel database
// export const writeUserData = async (userId, name, email, imageUrl) => {
//   try {
//     await set(ref(database, 'users/' + userId), {
//       username: name,
//       email: email,
//       profile_picture: imageUrl,
//     });
//     console.log('Dati utente salvati con successo!');
//   } catch (error) {
//     console.error('Errore durante il salvataggio dei dati:', error);
//   }
// };

// Funzione per leggere dati dal database
export const getUserData= async () => {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, `/`));
    if (snapshot.exists()) {
      console.log("Dati trovati:", snapshot.val());
      return snapshot.val(); // Restituisce i dati
    } else {
      console.log("Nessun dato trovato nel database.");
      return null; // Nessun dato trovato
    }
  } catch (error) {
    console.error("Errore durante la lettura dei dati:", error);
    return null; // Errore durante il fetch dei dati
  }
};