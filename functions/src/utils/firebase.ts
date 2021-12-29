import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDkQRzRsyuCvc62ghDmtfjnjgpcvo2sOWQ",
    authDomain: "missromy-fcccb.firebaseapp.com",
    databaseURL: "https://missromy-fcccb.firebaseio.com",
    projectId: "missromy-fcccb",
    storageBucket: "missromy-fcccb.appspot.com",
    messagingSenderId: "69202980956",
    appId: "1:69202980956:web:ada4274e7bef58a35cf699",
    measurementId: "G-0HJDE7S0WG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)