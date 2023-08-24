function Validation() {
    // -----------getting values from textboxes -----------
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
    var usercheck = /^[a-zA-Z. ]{3,30}$/;
    var passcheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    if (usercheck.test(u)) {
        document.getElementById("usercheck").innerHTML = " ";
    }
    else {
        document.getElementById("usercheck").innerHTML = " Invalid User Name ";
        return false;
    }
    if (passcheck.test(p)) {
        document.getElementById("passcheck").innerHTML = " ";
    }
    else {
        document.getElementById("passcheck").innerHTML = " Invalid Password";
        return false;
    }
}