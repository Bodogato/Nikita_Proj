//==========Task1===========
function Swap(){
    t = document.getElementById("4").innerHTML;
    document.getElementById("4").innerHTML = document.getElementById("5").innerHTML;
    document.getElementById("5").innerHTML = t;
}
//==========Task2===========
function Oval(){
    a = 4;
    b = 3;
    S = Math.PI * a * b;
    document.getElementById("3").appendChild(document.createElement("br"));
    document.getElementById("3").appendChild(document.createElement("p").appendChild(document.createTextNode(S)))
}
//==========Task3===========
if (document.cookie) hasCookies();

document.getElementById('calculate').onclick = function(){
	var total = document.getElementById('words').value;
	var wordCount = total != '' ? total.match(/([a-zA-Z]+)/g).length : 0;
	alert(wordCount)
	document.cookie = "Amount = " + wordCount.toString();
} 

function hasCookies() {
	if (confirm(document.cookie + "\n" + "Delete cookies?")) {
		let cookies = document.cookie.split(";");
		for (let i = 0; i < cookies.length; i++) {
			let cookie = cookies[i];
			let eqPos = cookie.indexOf("=");
			let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
			document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		}
	} else {
		alert("Cookies were saved");
		let form = document.forms.calculator;	// <form name="calculator"> element
		form.elements.words.style.visibility = 'hidden';
		form.elements.calculate.style.visibility = 'hidden';
	}
}
function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value) {
	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	document.cookie = updatedCookie;
}
