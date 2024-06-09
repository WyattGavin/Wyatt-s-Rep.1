import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBWY0NRE9oQVID6E-O3MsXAB0fbZ853cOA",
    authDomain: "testdatabase-c6c9d.firebaseapp.com",
    databaseURL: "https://testdatabase-c6c9d-default-rtdb.firebaseio.com",
    projectId: "testdatabase-c6c9d",
    storageBucket: "testdatabase-c6c9d.appspot.com",
    messagingSenderId: "1031997046009",
    appId: "1:1031997046009:web:f193ed16466476c1773628",
    measurementId: "G-XRDRDQ1T9E"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

document.addEventListener('DOMContentLoaded', async () => {
        
    const userToken = localStorage.getItem('userToken');
    if (!userToken) {
        console.log("nobody is signed in")
        return;
    }

    onAuthStateChanged(getAuth(), async (user) => {
        if (user) {
            try {
                const userUid = user.uid;
                const userEmail = user.email;

                const userRef = ref(db, 'dataTest/' + user.uid);
                const snapshot = await get(userRef);
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    const firstName = userData.firstname;
                    const lastName = userData.lastname;

                    document.title = `${firstName} ${lastName}`;

                    console.log(`Signed in as ${firstName}, ${lastName}`);
                    console.log(userEmail);
                    console.log(userUid);
                    window.location.href = `/html/home.html`;
                } else {
                    console.log("User data not found in the database.");
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    });
});
