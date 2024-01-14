function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

let email = document.querySelector("#email");
let submitBtn = document.querySelector(".emailBtn");
let signUpCard = document.querySelector(".signUpCard");
let successCard = document.querySelector(".successCard");
let error = document.querySelector(".error");
let dismissBtn = document.querySelector(".dismissBtn");
let userEmail = document.querySelector("#userEmail");

submitBtn.addEventListener("click", () => {
  if (ValidateEmail(email.value)) {
    signUpCard.style.display = "none";
    successCard.style.display = "block";
    userEmail.innerHTML = email.value;
  } else {
    error.style.display = "block";
    email.style = ` background-color: rgba(255, 98, 87, 0.4);
    border: 2px solid var(--Tomato);
    outline: none;
    border-radius: 5px;`;
  }
});

dismissBtn.onclick = () => {
  location.reload();
  signUpCard.style.display = "grid";
  successCard.style.display = "none";
};
