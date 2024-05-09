// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
     apiKey: "AIzaSyBO6FtBtGkbpdNLR-9IfazKEthWAOvtxUw",
     authDomain: "tradeshub-8ea66.firebaseapp.com",
     projectId: "tradeshub-8ea66",
     storageBucket: "tradeshub-8ea66.appspot.com",
     messagingSenderId: "254064509739",
     appId: "1:254064509739:web:42e2a2902ffae3d4e0fb6e",
     measurementId: "G-KKS5GGJ87K"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;