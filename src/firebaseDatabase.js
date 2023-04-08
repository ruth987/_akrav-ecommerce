import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

//Firebase data is retrieved by attaching an asynchronous listener to a firebase.database.Reference
const firebaseConfig = {

  databaseURL: "https://akrav-ecommerce-default-rtdb.firebaseio.com", 
};

const app = initializeApp(firebaseConfig);


const database = getDatabase(app);
