import * as firebase from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getFirestore  } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCdWrgU4Sh4Ifj5Lnp6WlnZtw5OAhSU-zI",
  authDomain: "blog-test-42501.firebaseapp.com",
  projectId: "blog-test-42501",
  storageBucket: "blog-test-42501.appspot.com",
  messagingSenderId: "538496799278",
  appId: "1:538496799278:web:6899881e6dd809e91c45bf",
  measurementId: "G-SL5M1PYVDP"
};

firebase.initializeApp(firebaseConfig);

export const firestore = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

