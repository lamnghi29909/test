const arrayuse = [
    {
        fullname: "nghi",
        gmail: "lelamnghi@gmail.com",
        password: 123456,
        repassword: 123456,
    }
]
function dangki() {
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".gmail").value;
    let pass = document.querySelector(".pass").value;
    let repass = document.querySelector(".repass").value;
    let i = 0;
    for (let item of arrayuse) {
        if ((name == item.fullname) && (pass == item.password) && (email == item.gmail) && (repass == item.repassword)) {
            window.location.assign("test.html");
            alert("thanhcong");
            i++;
        }
    }
    if ( i < 1) {
        alert("sai tai khoan hoac mat khau")
    }
}


// function abc() {

//     var _name = document.login.name.value;
//     var _pass = document.login.password.value;
//     var _gmail = document.login.gmail.value;
//     var _repass = document.login.matkhau.value

//     var ok =  true;

//     var ktten = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u;
//     var ktgmail= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// if (!_name.match(ktten)) {
//     document.getElementById("loiName").style.display = "block";
//     ok =false;
// } else {
//     document.getElementById("loiName").style.display = "none";
// }
// console.log(_name);


// if (!_gmail.match(ktgmail)) {
//     document.getElementById("loiGmail").style.display = "block";
//     ok =false;
// } else document.getElementById("loiGmail").style.display = "none"; 

// console.log(_gmail);


// if (_pass == "" ) {
//     document.getElementById("loipass").style.display = "block";
//     ok =false;
// } else document.getElementById("loipass").style.display = "none";
// console.log(_pass);


// if (_repass == "" ) {
//     document.getElementById("loimatkhau").style.display = "block";
//     ok =false;
// } else document.getElementById("loimatkhau").style.display = "none";
// console.log(_repass);



// if (ok) {
//     alert("thanh cong");
//     return ok;
// } else return ok;

// }

