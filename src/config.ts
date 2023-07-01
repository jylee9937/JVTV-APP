// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // Firestore를 사용하려면 추가

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_wB9_uwRPJ2ye2d317uuXYkSD3NPHf30",
    authDomain: "jvtv-checklist.firebaseapp.com",
    projectId: "jvtv-checklist",
    storageBucket: "jvtv-checklist.appspot.com",
    messagingSenderId: "925827132722",
    appId: "1:925827132722:web:198a655d1f38e255f7fb2b"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
