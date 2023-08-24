const firstName = document.getElementById('firstName');
const fNameError =document.getElementById('first-name-error')

firstName.addEventListener('blur',()=>{
    let regex = /([a-zA-Z])/;
  let firstNameValue = firstName.value;

  if (regex.test(firstNameValue)) {
    fNameError.innerHTML = "Valid name";
    fNameError.style.color = "green";
    fNameError.style.display = "block";
  } else {
    fNameError.innerHTML = "Invalid name";
    fNameError.style.color = "red";
    fNameError.style.display = "block";
  }
})

const lastName = document.getElementById('lastName');
const lNameError =document.getElementById('last-name-error')

lastName.addEventListener('blur',()=>{
    let regex = /([a-zA-Z])/;
    let lastNameValue = lastName.value;
  
    if (regex.test(lastNameValue)) {
      lNameError.innerHTML = "Valid name";
      lNameError.style.color = "green";
      lNameError.style.display = "block";
    } else {
      lNameError.innerHTML = "Invalid name";
      lNameError.style.color = "red";
      lNameError.style.display = "block";
    }
})

const userEmail = document.getElementById('userEmail');
const emailError=document.getElementById('email-error');

userEmail.addEventListener('blur',()=>{
    let regex = /([a-zA-Z0-9\._]+)@([a-zA-Z0-9_]+).([a-z]{2,8})(.[a-z]{2,8}?)/;
    let emailValue = userEmail.value;
  
    if (regex.test(emailValue)) {
      emailError.innerHTML = "Valid email";
      emailError.style.color = "green";
      emailError.style.display = "block";
    } else {
      emailError.innerHTML = "Invalid email";
      emailError.style.color = "red";
      emailError.style.display = "block";
    }
})

const userContact = document.getElementById('contactNumber');
const contactError = document.getElementById('contact-error');

userContact.addEventListener('blur',()=>{
    let regex = /[0-9]{10,12}/;
    let contactValue = userContact.value;
  
    if (regex.test(contactValue)) {
      contactError.innerHTML = "Valid number";
      contactError.style.color = "green";
      contactError.style.display = "block";
    } else {
      contactError.innerHTML = "Invalid number";
      contactError.style.color = "red";
      contactError.style.display = "block";
    }
})