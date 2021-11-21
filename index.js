generate();
document.getElementById("upper_letters").addEventListener("change" ,() => {generate()});
document.getElementById("numbers").addEventListener("change" ,() => {generate()});
document.getElementById("punctuation").addEventListener("change" ,() => {generate()});
document.getElementById("pwd_lenght").addEventListener("change" ,() => {generate()});

function generate(){
    const password_label = document.getElementById("password");
    const password_lenght = document.getElementById("pwd_lenght");
    
    var password = "";

    var dic = ["abcdefghijklmnopqrstuvwxyz"];
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "123456789";
    const punctuation = "!§$%&/()=?{}[]";

    if (document.getElementById("upper_letters").checked){
        dic.push(letters);
    }
    if (document.getElementById("numbers").checked){
        dic.push(numbers);
    }
    if (document.getElementById("punctuation").checked){
        dic.push(punctuation);
    }    

    for (let i = 0; i < password_lenght.value; i++){
        let index = dic[Math.floor(Math.random() * dic.length)];        
        password = password + index[Math.floor(Math.random() * index.length)];
    }

    password_label.innerHTML = password;
}

function copy() {
    const text = document.getElementById("password").innerHTML;
    if (text != ""){
        navigator.clipboard.writeText(text);
        alert("Copied the text: " + text);
    }
}

