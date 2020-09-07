import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAEx-kF13FTtNHv9HVWkhba0aQsPEJ-qjg",
  authDomain: "react-demo-3a20e.firebaseapp.com",
  databaseURL: "https://react-demo-3a20e.firebaseio.com",
  projectId: "react-demo-3a20e",
  storageBucket: "react-demo-3a20e.appspot.com",
  messagingSenderId: "551606600968",
  appId: "1:551606600968:web:58c88cd8453d86679058bd",
  measurementId: "G-JS6HV1ZLES",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // reference object is returned not actual data
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // snapshot is if actual data exists at the reference
  const snapShot = await userRef.get();

  // .exists = property of the DocumentSnapshot that signals whether or not the data exists.
  // True if the document exists
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
