import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBxvoSzG-516p-_CrcB066H69mt8xaCOLw",
    authDomain: "facebook-clone-2e936.firebaseapp.com",
    projectId: "facebook-clone-2e936",
    storageBucket: "facebook-clone-2e936.appspot.com",
    messagingSenderId: "803014956194",
    appId: "1:803014956194:web:a6c3fd97844aae7ef073fb",
    measurementId: "G-X3C7YHY1VM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;