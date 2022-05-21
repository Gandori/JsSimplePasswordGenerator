const pwd = document.getElementById("pwd");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const punctuation = "!§$%&/()=?{}[]";

var dic = "abcdefghijklmnopqrstuvwxyz";
var interval;
var p = "";
var pwd_len = document.getElementById("pwd_len");
var max = 128;
var min = 8;

generate();

function dec_pwd_len()
{
	if(pwd_len.value >= min){pwd_len.value--;}
	if(pwd_len.value <= min){pwd_len.value = min;}
}

function inc_pwd_len()
{
	if(pwd_len.value <= max){pwd_len.value++;}
	if(pwd_len.value >= max){pwd_len.value = max;}
}

function generate()
{
	if(pwd_len.value >= max){pwd_len.value = max;}
	if(pwd_len.value === ""){pwd_len.value = min;}
	if(document.getElementById("upper_letters").checked){dic = dic + letters;}
    if(document.getElementById("numbers").checked){dic = dic + numbers;}
    if(document.getElementById("punctuation").checked){dic = dic + punctuation;}

	p = "";
    for(let i = 0; i < pwd_len.value; i++)
    {p = p + dic[Math.floor(Math.random() * dic.length)];}
    pwd.innerHTML = p;
}

function copy_to_clipboard()
{
	if(p == ""){return;}
    navigator.clipboard.writeText(p);
    alert("Copied the Password to clipboard: " + p);
}
