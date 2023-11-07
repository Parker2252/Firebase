import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCzWib0jSigz490wHrEjngIynDR9xImOk4",
  authDomain: "subscriptions-73700.firebaseapp.com",
  projectId: "subscriptions-73700",
  storageBucket: "subscriptions-73700.appspot.com",
  messagingSenderId: "572950864750",
  appId: "1:572950864750:web:2abb751574a1e6a4ea977f"
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
