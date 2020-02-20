import  firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDhU6o2tAq3pmfO01SUuVqDBVCnOtKt0p4",
    authDomain: "test-f3aab.firebaseapp.com",
    databaseURL: "https://test-f3aab.firebaseio.com",
    projectId: "test-f3aab",
    storageBucket: "test-f3aab.appspot.com",
    messagingSenderId: "926668681850",
    appId: "1:926668681850:web:77745633ee953b0a9d81c3",
    measurementId: "G-6ZHVFZYWYQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export const db =firebase.firestore();
  
  db.settings({timestampsInSnapshots:true});

  export default firebase;