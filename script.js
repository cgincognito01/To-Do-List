var listName = document.getElementById('liName')

var name;
const inputName = () => {
	name = prompt("Enter the ListName");
	
	return name;
}

const change = () => {
	document.getElementById("liName").textContent = inputName() ;
}

listName.addEventListener("click", change)

//
 
var myNodeList = document.getElementsByTagName("li");
var i;

for (i = 0; i < myNodeList.length; i++) {
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = 'close';
	span.appendChild(txt);
	myNodeList[i].appendChild(span);
}
var ul = document.querySelector("ul");
var input = document.querySelector("#myInput");
var addbtn = document.querySelector(".addBtn");
function createlistelement(event) {
	var element = document.createElement("li");
	let txt =document.createTextNode(input.value);
	element.appendChild(txt);
	ul.appendChild(element);
	input.value = "";
	
	var span = document.createElement("span");
	txt = document.createTextNode("\u00D7");
	span.className = 'close';
	span.appendChild(txt);
	element.appendChild(span);

	del();
  
}

function inputLength() {
	return input.value.length;
}

function validclick() {
	if (inputLength() > 0) { 
		createlistelement();
	}
	else {
		alert("Enter some thing!");
	}
}
function validkeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) { 
		createlistelement();
	}
}
function toogleDone(event) {
	if (event.target.tagName === 'LI') 
	event.target.classList.toggle('checked')
}



addbtn.addEventListener("click", validclick);
input.addEventListener("keypress", validkeypress);
ul.addEventListener("click", toogleDone);

var close = document.getElementsByClassName("close");
var i;
del();
function del() {
	for (i = 0; i < close.length; i++) {
  		close[i].onclick = function() {
   			 var div = this.parentElement;
    		div.style.display = "none";
  		}
	}
}
