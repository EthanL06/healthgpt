import { db } from "../forums/posts";
import { getDoc, updateDoc, doc, increment } from "firebase/firestore";

export const getViews = async () => {
  // Get it from a collection called views and the id is "views"
  const snap = await getDoc(doc(db, "views", "users"));

  if (snap.exists()) {
    console.log("Document data:", snap.data());
    return snap.data().count;
  }

  // doc.data() will be undefined in this casec
  console.log("No such document!");
};

export const incrementViews = async () => {
  const docRef = doc(db, "views", "users");

  await updateDoc(docRef, {
    users: increment(1),
  });

  // Print the new views count
  const newSnap = await getDoc(docRef);
  console.log("New views count: ", newSnap.data().count);
};
