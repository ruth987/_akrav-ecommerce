import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getDatabase, ref, onValue} from "firebase/database";

//Firebase data is retrieved by attaching an asynchronous listener to a firebase.database.Reference
const firebaseConfig = {

  databaseURL: "https://akrav-ecommerce-default-rtdb.firebaseio.com", 
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

// Attach an asynchronous callback to read the data at our posts reference
onValue(ref(database, 'posts'), (snapshot) => {
    const data = snapshot.val();
    console.log(data);
});

// const db = getDatabase();
// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });