import firebase from 'firbase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDAWLGZyzBlR7f9nTtadcRYfIvuuKX3lU0",
  authDomain: "soccerstorage1.firebaseapp.com",
  databaseURL: "https://soccerstorage1.firebaseio.com",
  projectId: "soccerstorage1",
  storageBucket: "soccerstorage1.appspot.com",
  messagingSenderId: "418968006360",
  appId: "1:418968006360:web:acec3804c93f51196df1ad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firstore().settings( {timestampsInSnapshots: true })

export default firebaseConfig;
