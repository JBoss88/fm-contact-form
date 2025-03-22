const form = document.querySelector("form");
const submit = document.querySelector("button");
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("input[type='email']");
// let selectedRadio = document.querySelector("input[name='choice']");
let message = document.querySelector("textarea");
let consentCheckbox = document.querySelector("input[type='checkbox']");
const firstP = document.querySelector("#first-name + p");
const lastP = document.querySelector("#last-name + p");
const consentP = document.querySelector(".consentP");
const emailP = document.querySelector("input[type='email'] + p");
let messageP = document.querySelector("textarea + p");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstName.value.trim() === "") {
    firstP.style.display = "block";
    firstName.style.border = "1px solid red";
  } else {
    firstName.style.border = "1px solid gray";
    firstP.style.display = "none";
  }

  if (lastName.value.trim() === "") {
    lastP.style.display = "block";
    lastName.style.border = "1px solid red";
  } else {
    lastName.style.border = "1px solid gray";
    lastP.style.display = "none";
  }

  if (email.value.trim() === "") {
    email.style.border = "1px solid red";
    emailP.style.display = "block";
  } else {
    email.style.border = "1px solid gray";
    emailP.style.display = "none";
  }

  if (message.value.trim() === "") {
    message.style.border = "1px solid red";
    messageP.style.display = "block";
  } else {
    message.style.border = "1px solid gray";
    messageP.style.display = "none";
  }

  let selectedRadio = document.querySelector("input[name='choice']:checked");
  if (selectedRadio) {
    console.log(selectedRadio.value);
  } else {
    console.log("Please select an option");
  }

  if (consentCheckbox.checked) {
    console.log("User has agreed to the terms and conditions.");
    consentP.style.display = "none";
  } else {
    console.log("User has not agreed to the terms and conditions.");
    consentP.style.display = "block";
  }
});
