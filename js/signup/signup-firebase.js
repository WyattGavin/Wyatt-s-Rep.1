import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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
const auth = getAuth(app);

const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email_input').value;
    const password = document.getElementById('password_input').value;
    const Fname = document.getElementById('firstname_input').value;
    const Lname = document.getElementById('lastname_input').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        await set(ref(db, 'dataTest/' + user.uid), {
            firstname: Fname,
            lastname: Lname,
            email: email
        });
        
        console.log('User info added to the database.');
        window.location.href = 'login.html';
    } catch (error) {
        const regError = document.getElementById('error_reg');
        if (error.code === 'auth/email-already-in-use') {
            regError.textContent = "Email already in use";
        } else if (error.code === 'auth/invalid-email') {
            regError.textContent = "Invalid email";
        } else if (error.code === 'auth/weak-password') {
            regError.textContent = "Password must be at least 6 characters long";
        } else {
            regError.textContent = "Error: " + error.message;
        }
        console.error('Error:', error.message);
    }
});
