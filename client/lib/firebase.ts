import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

initializeApp({
  apiKey: 'AIzaSyBbd3JR0KiWOiCIeh1TFVFRVv0gRzBPtC8',
  authDomain: 'bluemoon-82c0b.firebaseapp.com',
  databaseURL: 'https://bluemoon-82c0b.firebaseio.com',
  projectId: 'bluemoon-82c0b',
  storageBucket: 'bluemoon-82c0b.appspot.com',
  messagingSenderId: '520365310779',
});

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
