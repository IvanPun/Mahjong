// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDg-H5bDyqIaSq6g8g0VtkoK_GEZtnQgAc",
    authDomain: "mahjong-7b241.firebaseapp.com",
    projectId: "mahjong-7b241",
    storageBucket: "mahjong-7b241.appspot.com",
    messagingSenderId: "903325364872",
    appId: "1:903325364872:web:63eef47cf35704f8f0653d",
    measurementId: "G-WH4X44PZ74"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  console.log(db);

import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

const docRef = doc(db, "name", "money");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}