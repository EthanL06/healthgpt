import firebase_app from "../config";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

export const db = getFirestore(firebase_app);

export const createPost = async (title, body) => {
  if (!title || !body) {
    console.log("Title or body is empty");
    return;
  }

  if (title.trim().length === 0 || body.trim().length === 0) {
    console.log("Title or body is empty");
    return;
  }

  const docRef = await addDoc(collection(db, "forums"), {
    title: title,
    body: body,
    name: localStorage.getItem("name"),
    profilePic: localStorage.getItem("profilePic"),
    createdAt: serverTimestamp(),
  });

  console.log("Document written with ID: ", docRef.id);
};

export const getPosts = async () => {
  const querySnapshot = await getDocs(
    collection(db, "forums"),
    orderBy("createdAt", "desc")
  );
  return querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      title: doc.data().title,
      body: doc.data().body,
      name: doc.data().name,
      profilePic: doc.data().profilePic,
    };
  });
};

export const getPost = async (id) => {
  const snap = await getDoc(doc(db, "forums", id));

  if (snap.exists()) {
    console.log("Document data:", snap.data());
    return {
      id: snap.id,
      title: snap.data().title,
      body: snap.data().body,
      name: snap.data().name,
      profilePic: snap.data().profilePic,
    };
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return Promise.reject("No such document!");
  }
};
