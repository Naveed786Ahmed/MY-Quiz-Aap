import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCzopToh8val4SXjmgELBvvZPvuTwVQz5g",
    authDomain: "todo-app-30228.firebaseapp.com",
    projectId: "todo-app-30228",
    storageBucket: "todo-app-30228.appspot.com",
    messagingSenderId: "595836119371",
    appId: "1:595836119371:web:b5d4e2cd906678c3bc20ce",
    measurementId: "G-0NY60BN7BW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user.email);
    } else {

    }
});

const logoutfux = () => {
    signOut(auth).then(() => {
        alert(`Sign-Out Successfully.`)
        location.pathname = "/index.html"
    }).catch((error) => {
        console.log(error);
    });
}

const logout = document.getElementById("logout")
logout.addEventListener("click", logoutfux)










