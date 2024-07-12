import { auth, RecaptchaVerifier, signInWithPhoneNumber, GoogleAuthProvider, provider, signInWithPopup } from "./firebase.js";

let errors = document.getElementById("error")
let success = document.getElementById("success")

let confirmationResults;

function successFunx() {
    success.style.display = "none"
}

function errorFunx() {
    errors.style.display = "none";
}


const signupFux = () => {

    const phone = document.getElementById("phone")
    const recapcher = document.getElementById("recaptcha-container")

    console.log(phone.value);
    window.recaptchaVerifier = new RecaptchaVerifier(auth, recapcher, {});
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, "+92" + phone.value, appVerifier)
        .then((confirmationResult) => {
            console.log(confirmationResult);
            success.style.display = "flex";
            success.innerHTML = `Please check your phone for the verification code.`
            setTimeout(successFunx, 5000)
            return confirmationResults = confirmationResult

        }).catch((error) => {
            errors.style.display = "flex"
            errors.innerHTML = `Message Not Send SMS Service Not Available`
            setTimeout(errorFunx, 5000)
        });

}

const loginGoogleFux = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            alert(`Successfully Login`)
            location.pathname = '/pages/Quiz%20Folder/Quiz.html';


        }).catch((error) => {
            const errorMessage = error.message;
            errors.style.display = "flex"
            errors.innerHTML = errorMessage
            setTimeout(errorFunx, 5000)
        });
}

const loginFux = () => {

    const code = document.getElementById("otpCode");
    confirmationResults.confirm(code.value).then((result) => {
        const user = result.user;
        console.log(user);
        alert(`Successfully Login`)
        location.pathname = '/pages/Quiz%20Folder/Quiz.html';

    }).catch((error) => {
        errors.style.display = "flex"
        errors.innerHTML = error
        setTimeout(errorFunx, 5000)
    });

}


const loginGoogle = document.getElementById("loginGoogle");
const signup = document.getElementById("signup");
const login = document.getElementById("login");

signup.addEventListener("click", signupFux);
loginGoogle.addEventListener("click", loginGoogleFux)
login.addEventListener("click", loginFux)


