import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDU0wQOcHn3krIA34lFSG0GPz5DXNERMRg",
  authDomain: "disneyplushostar-clone.firebaseapp.com",
  projectId: "disneyplushostar-clone",
  storageBucket: "disneyplushostar-clone.appspot.com",
  messagingSenderId: "280784801661",
  appId: "1:280784801661:web:b9421470df11f7a7c78614",
  measurementId: "G-JF9TNNLKWD",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
