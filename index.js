function generat_passwd(){
    const dic = []
    const passwd_lenght = document.getElementById("passwd_lenght").value
    var passwd = ""


    const upper_letters = document.getElementById("upper_letters")
    if (upper_letters.checked == true) dic.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    if (upper_letters.checked == false) dic.pop("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    const numbers = document.getElementById("numbers")
    if (numbers.checked == true) dic.push("123456789");
    if (numbers.checked == false) dic.pop("123456789");

    const punctuation = document.getElementById("punctuation")
    if (punctuation.checked == true) dic.push("!§$%&/()=?{}[]");
    if (punctuation.checked == false) dic.pop("!§$%&/()=?{}[]");

    dic.push("abcdefghijklmnopqrstuvwxyz");
    for (let i = 0; i < +passwd_lenght; i++){
        let index = dic[Math.floor(Math.random() * dic.length)]
     
        passwd = passwd + index[Math.floor(Math.random() * index.length)] 
    }

    document.getElementById("passwd").innerHTML = passwd
}

function copy() {
    const text = document.getElementById("passwd").innerHTML
    if (text != ""){
        navigator.clipboard.writeText(text);
        alert("Copied the text: " + text);
    }
}

