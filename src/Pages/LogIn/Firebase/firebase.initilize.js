import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";


const initilizeAouthenticition = () => {
    initializeApp(firebaseConfig);
}

export default initilizeAouthenticition;