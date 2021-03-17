import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics';
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDaX_9h7Y3fL8hwxuOY--D7Aj2kt7PhBrc",
    authDomain: "imagegram-6e43c.firebaseapp.com",
    projectId: "imagegram-6e43c",
    storageBucket: "imagegram-6e43c.appspot.com",
    messagingSenderId: "537670226474",
    appId: "1:537670226474:web:ddbe4f2b16754f43f02953",
    measurementId: "G-C314L9XKN5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectFirestore, projectStorage};
  