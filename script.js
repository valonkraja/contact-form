const form = document.querySelector("form");
const success = document.querySelector(".success-modal");
const fName = document.querySelector("#f-name");
const lName = document.querySelector("#l-name");
const email = document.querySelector("#email");
const query = document.getElementsByName("query-type");
const message = document.querySelector("#message");
const consent = document.querySelector("#consent");
const errorFirst = document.querySelector(".error-fname");
const errorLast = document.querySelector(".error-lname");
const errorEmail = document.querySelector(".error-email");
const errorQuery = document.querySelector(".error-query");
const errorMessage = document.querySelector(".error-message");
const errorConsent = document.querySelector(".error-consent");

// errorLast.style.display = "block";

const validEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else {
    return false;
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (fName.value === "") {
    errorFirst.style.display = "block";
    fName.style.borderColor = "hsl(0, 66%, 56%)";
  } else {
    errorFirst.style.display = "none";
    fName.style.borderColor = "hsl(186, 15%, 59%)";
  }
  if (lName.value === "") {
    errorLast.style.display = "block";
    lName.style.borderColor = "hsl(0, 66%, 56%)";
  } else {
    errorLast.style.display = "none";
    lName.style.borderColor = "hsl(186, 15%, 59%)";
  }
  if (!validEmail(email.value)) {
    errorEmail.style.display = "block";
    email.style.borderColor = "hsl(0, 66%, 56%)";
  } else {
    errorEmail.style.display = "none";
    email.style.borderColor = "hsl(186, 15%, 59%)";
  }
  if (!query[0].checked && !query[1].checked) {
    errorQuery.style.display = "block";
  } else {
    errorQuery.style.display = "none";
  }
  //   if (!query[1].checked) {
  //     errorQuery.style.display = "block";
  //   } else {
  //     errorQuery.style.display = "none";
  //   }
  if (message.value === "") {
    errorMessage.style.display = "block";
    message.style.borderColor = "hsl(0, 66%, 56%)";
  } else {
    errorMessage.style.display = "none";
    message.style.borderColor = "hsl(186, 15%, 59%)";
  }
  if (!consent.checked) {
    errorConsent.style.display = "block";
  } else {
    errorConsent.style.display = "none";
  }

  if (
    fName.value !== "" &&
    lName.value !== "" &&
    validEmail(email.value) &&
    message.value !== "" &&
    consent.checked &&
    (query[0].checked || query[1].checked)
  ) {
    success.style.display = "block";
  }
});
