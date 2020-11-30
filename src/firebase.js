import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAjlsD5ClCybK0C4x9da8sG9t6kiO6GN4g",
    authDomain: "socialize-43d89.firebaseapp.com",
    databaseURL: "https://socialize-43d89.firebaseio.com",
    projectId: "socialize-43d89",
    storageBucket: "socialize-43d89.appspot.com",
    messagingSenderId: "974933277626",
    appId: "1:974933277626:web:1bc9dca52385df74d6fb83",
    measurementId: "G-ZZ6VWRQNK2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()