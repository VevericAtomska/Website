function myFunction() {
    var message= document.getElementById("message").value;
    var fname = document.getElementById("fname").value;
    var at = document.getElementById("email").value.indexOf("@");
    var phone = document.getElementById("phone").value;
    submitOK = "true";



    if (fname.length > 10) {
        alert("The name may have no more than 10 characters");
        submitOK = "false";
    }
    if (at == -1) {
        alert("Not a valid e-mail!");
        submitOK = "false";
    }
    if(phone.length>10){
        alert("Please Enter valid Phone Number");
        submitOK = "false";
    }

    if (submitOK == "false") {
        return false;
    }
}