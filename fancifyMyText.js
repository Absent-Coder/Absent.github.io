function alertOnClick(){
	alert("Hello World");
	document.getElementById("input").style.fontSize="24px";
	
}

function fancify(){
	document.getElementById("input").style.color = "blue";
	document.getElementById("input").style.textDecoration = "underline";
	document.getElementById("input").style.fontWeight = "bold";
}

function boring(){
	document.getElementById("input").style.color = "#000000";
	document.getElementById("input").style.fontWeight = "";
	document.getElementById("input").style.textDecoration = "";
}

function moo(){
	var str = toUpperCase(document.getElementById("input").value);
	var parts = str.split(".");
	str = parts.join("-Moo");
	document.getElementById("input") = str;
}