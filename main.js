import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

const docRef = doc(db, "name", "money");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}