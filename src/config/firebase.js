import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD52cauGj3hoeL5g_ydpYoXoyvnGrulF_k",
    authDomain: "mobile-app-store-1.firebaseapp.com",
    projectId: "mobile-app-store-1",
    storageBucket: "mobile-app-store-1.appspot.com",
    messagingSenderId: "620958219679",
    appId: "1:620958219679:web:2947947e8722b72e1151aa",
    measurementId: "G-03RH16G20K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)

