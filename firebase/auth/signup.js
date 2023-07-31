import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import firebase_app from "../config";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

export const auth = getAuth(firebase_app);
const db = getFirestore(firebase_app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;
    const uid = result.user.uid;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);
    localStorage.setItem("uid", uid);

    // Add user to database if not already added
    const docRef = doc(db, "users", uid);

    getDoc(docRef)
      .then((docSnap) => {
        if (!docSnap.exists()) {
          addDoc(collection(db, "users"), {
            name: name,
            email: email,
            profilePic: profilePic,
            uid: uid,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

export const signOut = () => {
  auth.signOut();

  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("profilePic");
  localStorage.removeItem("uid");
};
