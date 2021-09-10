const formContainer = document.querySelector(".formContainer");
const form = document.querySelector("#contact");

const fullName = document.querySelector("#fullname");
const fullNameError = document.querySelector("#fullnameerror");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjecterror");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailerror");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addresserror");




function validateContactForm() {
    event.preventDefault();

    if (checkValue(fullName.value, 1)) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }
    if (checkValue(address.value, 25)) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if (checkValue(subject.value, 10)) {
        subjectError.style.display = "none";

    } else {
        subjectError.style.display = "block";
    }

    if (checkValue(fullName.value, 1) && checkValue(address.value, 25) && validateEmail(email.value) && checkValue(subject.value, 10)) {
        submitContactform();
    }

}


form.addEventListener("submit", validateContactForm);



function submitContactform() {
    formContainer.innerHTML = `<div class="submitMessage">
                                    <h2>Thanks!</h2>
                                    <p id="submitmessage">Your message has been sent.</p>
                                </div>`;
}

function checkValue(value, length) {
    if (value.length > length) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const reg = /\S+@\S+\.\S+/;
    const testEmail = reg.test(email);
    return testEmail;
}