import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app'; //Import de firebase
import {
  Firestore,
  getFirestore,
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore'; //Import de firebase
import { IQuestion } from '../interfaces/question.interface';
import { QUESTIONS } from './questions';

const firebaseConfig = {
  //configuracion firebase
  apiKey: 'AIzaSyCsQ_LSCYhRK2Vd_CLRcUFOI_wGTI14P9Q',
  authDomain: 'triviaa-3c50c.firebaseapp.com',
  projectId: 'triviaa-3c50c',
  storageBucket: 'triviaa-3c50c.appspot.com',
  messagingSenderId: '761401726492',
  appId: '1:761401726492:web:f7515678b1733b1e04b1d9',
};

@Injectable({
  providedIn: 'root',
})
export class FireBaseService {
  db: Firestore;
  questions: IQuestion[] = []; //Es un arreglo vacio de la interfaz
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }

  //Funcion para subir preguntas a firebase

  async importData() {
    const collectionName = 'questions';
    const q = QUESTIONS; //IMPORTACION DEL ARREGLO DE PREGUNTAS
    for (const question of q) {
      //question es la variable temporal para recorrer las preguntas
      const docRef = doc(collection(this.db, collectionName)); //es un documento, indica en que coleccion y que base de datos
      await setDoc(docRef, question);
    }
  }

  async getAllQuestions(): Promise<IQuestion[]>{
    const collectionName = 'questions';
    const collectionRef = collection(this.db, collectionName);
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data() as IQuestion) //Map itera todos los elementos, les aplica una funcion y los regresa, en este caso, les da formato IQuestion
  }

  async shuffleQuestions(limit: number){
    const questions = await this.getAllQuestions();
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    //Los sort funcionan cada 2 elementos, los acomoda segun positivo o negativo
    return shuffledQuestions.slice(0, limit);
  }
}
