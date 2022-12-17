function abc() {
    var _pass = document.login.password.value;
    var _gmail = document.login.gmail.value;

    var ok =  true;

    var ktten = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u;
    var ktgmail= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


if (!_gmail.match(ktgmail)) {
    document.getElementById("loiGmail").style.display = "block";
    ok =false;
} else document.getElementById("loiGmail").style.display = "none"; 

console.log(_gmail);


if (_pass == "" ) {
    document.getElementById("loipass").style.display = "block";
    ok =false;
} else document.getElementById("loipass").style.display = "none";
console.log(_pass);



if (ok) {
    alert("thanh cong");
    return ok;
} else return ok;
}