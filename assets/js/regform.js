//-- Registration form scripting

let firstForm = document.getElementById("form-first");
let nextForm = document.getElementById("form-second");

function showNextForm() {
  firstForm.classList.add("hide-first-form");
  nextForm.classList.add("show-next-form");
}

function showPrevForm() {
  firstForm.classList.remove("hide-first-form");
  nextForm.classList.remove("show-next-form");
}

//-- Registration form Validation

// username and email validation
const userName = document.getElementById("username");
const userEmail = document.getElementById("useremail");
const nameErrorMsg = document.getElementById("error-name-msg");
const emailErrorMsg = document.getElementById("error-email-msg");

userName.addEventListener("blur", () => {
  let regex = /([a-zA-Z])/;
  let nameValue = userName.value;

  if (regex.test(nameValue)) {
    nameErrorMsg.innerHTML = "Valid name";
    nameErrorMsg.style.color = "green";
    nameErrorMsg.style.display = "block";
  } else {
    nameErrorMsg.innerHTML = "Invalid name";
    nameErrorMsg.style.color = "red";
    nameErrorMsg.style.display = "block";
  }
});

userEmail.addEventListener("blur", () => {
  let regex = /([a-zA-Z0-9\._]+)@([a-zA-Z0-9_]+).([a-z]{2,8})(.[a-z]{2,8}?)/;
  let emailValue = userEmail.value;

  if (regex.test(emailValue)) {
    emailErrorMsg.innerHTML = "Valid email";
    emailErrorMsg.style.color = "green";
    emailErrorMsg.style.display = "block";
  } else {
    emailErrorMsg.innerHTML = "Invalid email";
    emailErrorMsg.style.color = "red";
    emailErrorMsg.style.display = "block";
  }
});

// password validation
const userPassword = document.getElementById("userpassword");
const confirmPassword = document.getElementById("confirm-password");
const passwordErrorMsg = document.getElementById("error-password-msg");
const passwordConfirmationMsg = document.getElementById("confirm-password-msg");

userPassword.addEventListener("blur", () => {
  let passLength = /.{8,32}/;
  let passSpecialCase = /[!@#$%^&\*-_=]/;
  let passLowerCase = /[a-z]/;
  let passUpperCase = /[A-Z]/;
  let numberCase = /[0-9]/;

  let passwordValue = userPassword.value;

  if (
    passLength.test(passwordValue) &&
    passSpecialCase.test(passwordValue) &&
    passLowerCase.test(passwordValue) &&
    passUpperCase.test(passwordValue) &&
    numberCase.test(passwordValue)
  ) {
    passwordErrorMsg.innerHTML = "Valid Password";
    passwordErrorMsg.style.color = "green";
    passwordErrorMsg.style.display = "block";
  } else {
    passwordErrorMsg.style.display = "block";
  }
});

confirmPassword.addEventListener("blur", () => {
  const pass1 = userPassword.value;
  const pass2 = confirmPassword.value;

  if (pass2 != "" && pass1 == pass2) {
    passwordConfirmationMsg.innerHTML = "Password Matched";
    passwordConfirmationMsg.style.color = "green";
    passwordConfirmationMsg.style.display = "block";
  } else {
    passwordConfirmationMsg.innerHTML = "Unmatched password";
    passwordConfirmationMsg.style.color = "red";
    passwordConfirmationMsg.style.display = "block";
  }
});

// address and country input validation 

const userAddress= document.getElementById('useraddress');
const addressErrorMsg = document.getElementById('error-address-msg');

userAddress.addEventListener("blur", ()=>{
  const addressValue = userAddress.value;

  let regex = /[a-zA-Z0-9\s.,#-]{8,}/;

  if(regex.test(addressValue)){
    addressErrorMsg.innerHTML="Valid Address";
    addressErrorMsg.style.color="green";
    addressErrorMsg.style.display="block"
  }else{
    addressErrorMsg.innerHTML="Invalid Address";
    addressErrorMsg.style.color="red";
    addressErrorMsg.style.display="block";
  }
})

const marryCountryInput = document.getElementById("marry-country-input");
const countryErrorMsg = document.getElementById("error-country-msg");

marryCountryInput.addEventListener('blur',()=>{
  let regex = /([a-zA-Z])/;
  let countryValue = marryCountryInput.value;

  if(regex.test(countryValue)){
    countryErrorMsg.innerHTML="Valid country";
    countryErrorMsg.style.color="green";
    countryErrorMsg.style.display="block";
  }else{
    countryErrorMsg.innerHTML="Invalid country"
    countryErrorMsg.style.color="red";
    countryErrorMsg.style.display="block";
  }
})

// Date and country checkboxes functionality

const marryDateInput = document.getElementById("marry-date-input");
const marryDateCheckbox = document.getElementById("marry-date-checkbox");

marryDateCheckbox.addEventListener("change", function () {
  if (marryDateCheckbox.checked) {
    marryDateInput.disabled = true;
    marryDateInput.style.backgroundColor="#f0eded";
  } else {
    marryDateInput.disabled = false;
    marryDateInput.style.backgroundColor="#fff";
  }
});

const marryCountryCheckbox = document.getElementById("marry-country-checkbox");

marryCountryCheckbox.addEventListener("change", function () {
  if (marryCountryCheckbox.checked) {
    marryCountryInput.disabled = true;
    marryCountryInput.style.backgroundColor="#f0eded";
    countryErrorMsg.style.display="none"
  } else {
    marryCountryInput.disabled = false;
    marryCountryInput.style.backgroundColor="#fff";
  }
});

//--Password show and hide functionality
const eyeclose= document.getElementById('eye-password');

eyeclose.onclick=function(){
  if(userPassword.type=='password'){
    userPassword.type='text'
    eyeclose.src='assets/images/eye-solid.svg'
  }else{
    userPassword.type='password';
    eyeclose.src='assets/images/eye-slash-solid.svg'
    
  }
}


// Modal scripting

var modal = document.getElementById("myModal");
var regForm = document.getElementById("registration-form");

// When the user clicks the submit button, show the modal with slide-up animation
regForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting
  if (regForm.checkValidity()) {
    modal.style.visibility = "visible";
    modal.classList.add("slide-up");
  }
});



