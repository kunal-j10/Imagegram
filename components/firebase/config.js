import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "***********",
    authDomain: "***********",
    projectId: "***********",
    storageBucket: "***********",
    messagingSenderId: "***********",
    appId: "***********",
    measurementId: "***********"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectFirestore, projectStorage};
  