var regname = document.getElementById("regname");
var regusername = document.getElementById("regusername");
var regpassword = document.getElementById("regpassword");
var regsend = document.getElementById("regsend");

var loginusername = document.getElementById("loginusername");
var loginpassword = document.getElementById("loginpassword");
var loginsend = document.getElementById("loginsend");

var bankcenter = document.getElementById("bankcenter");
bankcenter.style.fontFamily = "Helvetica";

var namewarning = "Isi selengkapnya";
var regwarning = "Minimal 6 karakter";
var usernamewarning = "Username salah";
var passwordwarning = "Password salah";

var name = regname.value;
var username = regusername.value;
var password = regpassword.value;

regname.style.fontFamily = "Open Sans";
regusername.style.fontFamily = "Open Sans";
regpassword.style.fontFamily = "Open Sans";
loginpassword.style.fontFamily = "Open Sans";
loginusername.style.fontFamily = "Open Sans";

regname.addEventListener("click", function(){
    regname.value = "";
    regname.style.color = "black";
});

regusername.addEventListener("click", function(){
    regusername.value = "";
    regusername.style.color = "black";
});

regpassword.addEventListener("click", function(){
    regpassword.value = "";
    regpassword.type = "password";
    regpassword.style.color = "black";
});

loginusername.addEventListener("click", function(){
    loginusername.value = "";
    loginusername.style.color = "black";
});

loginpassword.addEventListener("click", function(){
    loginpassword.value = "";
    loginpassword.type = "password";
    loginpassword.style.color = "black";
});



regsend.addEventListener("click", function(){
    
    name = regname.value;
    username = regusername.value;
    password = regpassword.value;

    if ((name.length<=1)||(username.length<=5)||(password.length<=5)||
    (name==namewarning)||(username==regwarning)||(password==regwarning)){
        alert("Isi data dengan lengkap");
    } else{
        alert("Akun anda telah dibuat");
        regname.value = "";
        regusername.value = "";
        regpassword.value = "";

    };
    if ((name.length<=1)||(name==namewarning)){
        regname.value = namewarning;
        regname.style.color = "grey";
    };
    if ((username.length<=5)||(username==regwarning)){
        regusername.value = regwarning;
        regusername.style.color = "grey";
    };
    if ((password.length<=5)||(password==regwarning)){
        regpassword.value = regwarning;
        regpassword.type = "text";
        regpassword.style.color = "grey";
    };
});

loginsend.addEventListener("click", function(){
    if ((loginusername.value!=username)||(loginpassword.value!=password)||
    (loginusername.value=="")||(loginpassword.value=="")){
        alert("Username atau password anda salah.\nJika belum punya akun, silahkan registrasi terlebih dahulu.");
    } else{
        alert("Hi "+name+"!\nAnda telah berhasil login ^^");
    };
    if ((loginusername.value!=username)||(loginusername.value=="")) {
        loginusername.value = usernamewarning;
        loginusername.style.color = "grey";
    };
    if ((loginpassword.value!=password)||(loginpassword.value=="")) {
        loginpassword.value = passwordwarning;
        loginpassword.type = "text";
        loginpassword.style.color = "grey";
    };
});