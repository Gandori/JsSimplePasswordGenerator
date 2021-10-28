const dic = ["abcdefghijklmnopqrstuvwxyz"];

function generat_passwd(){
    const passwd_lenght = document.getElementById("passwd_lenght").value;
    var passwd = "";

    console.log(dic);

    for (let i = 0; i < +passwd_lenght; i++){
        let index = dic[Math.floor(Math.random() * dic.length)];
     
        passwd = passwd + index[Math.floor(Math.random() * index.length)];
    }

    document.getElementById("passwd").innerHTML = passwd;
}

const letters_label = document.getElementById("upper_letters");
letters_label.addEventListener("change" ,() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    switch (letters_label.checked) {
        case true:
            console.log(true);
            dic.push(letters);
            break;
    
        case false:
            dic.pop(letters);
            break;
    }
})


const numbers_label = document.getElementById("numbers");
numbers_label.addEventListener("change" ,() => {
    const numbers = "123456789";
    switch (numbers_label.checked) {
        case true:
            dic.push(numbers);
            break;
    
        case false:
            dic.pop(numbers);
            break;
    }
})

const punctuation_label = document.getElementById("punctuation");
punctuation_label.addEventListener("change" ,() => {
    const punctuation = "!§$%&/()=?{}[]";
    switch (punctuation_label.checked) {
        case true:
            dic.push(punctuation);
            break;
    
        case false:
            dic.pop(punctuation);
            break;
    }
})

function copy() {
    const text = document.getElementById("passwd").innerHTML;
    if (text != ""){
        navigator.clipboard.writeText(text);
        alert("Copied the text: " + text);
    }
}

