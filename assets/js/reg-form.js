// Registration form scripting

let firstForm = document.getElementById('form-first');
let nextForm = document.getElementById('form-second');

function showNextForm(){
    firstForm.classList.add('hide-first-form');
    nextForm.classList.add('show-next-form');
}

function showPrevForm(){
    firstForm.classList.remove('hide-first-form');
    nextForm.classList.remove('show-next-form');
}