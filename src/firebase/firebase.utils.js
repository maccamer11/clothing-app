import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyBDuwHWy5YmCBPtPR8fEE0g-G24tbv0NTg",
    authDomain: "clothing-app-bc9c9.firebaseapp.com",
    databaseURL: "https://clothing-app-bc9c9.firebaseio.com",
    projectId: "clothing-app-bc9c9",
    storageBucket: "clothing-app-bc9c9.appspot.com",
    messagingSenderId: "447529494917",
    appId: "1:447529494917:web:2090575e793e64709b7cec",
    measurementId: "G-T1YVH5CNPR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;