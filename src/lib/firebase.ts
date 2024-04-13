import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyCTeYsyU5kyo0XoVanETEgfJTtP-_Q_EWk',
  authDomain: 'my-blog-9a1fe.firebaseapp.com',
  projectId: 'my-blog-9a1fe',
  storageBucket: 'my-blog-9a1fe.appspot.com',
  messagingSenderId: '583253568969',
  appId: '1:583253568969:web:2f3f7101b32a082d074c18',
};

const app = initializeApp(firebaseConfig);

export const firebaseDb = getFirestore(app);
export const firebaseAuth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
