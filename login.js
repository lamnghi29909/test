function abc() {
    var _Password = document.contact.Password.value;
    var _Email = document.contact.Email.value;
    var done =  true;
    var ktEmail= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


if (!_Email.match(ktEmail)) {
    document.getElementById("loiemail").style.display = "block";
    done =false;
} else {
    document.getElementById("loiemail").style.display = "block";
    console.log(_Email);
}

if(_Password == "" || _Email == "") {
    alert("không được để trống");
} 
if (done) {
    alert("thanh cong");
    return done;
} else return done;
}