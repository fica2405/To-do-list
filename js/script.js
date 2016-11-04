function BarUserColor()
{
	
	document.getElementById("baru").style.backgroundColor = "rgba(0,112,234,1)";
	document.getElementById("baru").style.height = "2px";
	document.getElementById("lbl").style.color = "black";
	document.getElementById("lbl").style.fontWeight = "bold";
	document.getElementById("usern").style.color = "black";
	
	
}

function BarRegUserColor()
{
	
	document.getElementById("baru1").style.backgroundColor = "rgba(0,112,234,1)";
	document.getElementById("baru1").style.height = "2px";
	document.getElementById("lbl2").style.color = "black";
	document.getElementById("lbl2").style.fontWeight = "bold";
	document.getElementById("usern1").style.color = "black";
	
	
}

function BarForgotUserColor() 
{
	document.getElementById("baru2").style.backgroundColor = "rgba(0,112,234,1)";
	document.getElementById("baru2").style.height = "2px";
	document.getElementById("lbl3").style.color = "black";
	document.getElementById("lbl3").style.fontWeight = "bold";
	document.getElementById("usern2").style.color = "black";
}

function BarUserColorOut()
{
	
	document.getElementById("baru").style.backgroundColor = "#757575";
	document.getElementById("baru").style.height = "1px";	
	document.getElementById("lbl").style.color = "#757575";
	document.getElementById("lbl").style.fontWeight = "normal";
	document.getElementById("usern").style.color = "#757575";
}

function BarRegUserColorOut()
{
	
	document.getElementById("baru1").style.backgroundColor = "#757575";
	document.getElementById("baru1").style.height = "1px";	
	document.getElementById("lbl2").style.color = "#757575";
	document.getElementById("lbl2").style.fontWeight = "normal";
	document.getElementById("usern1").style.color = "#757575";
}

function BarForgotUserColorOut()
{
	
	document.getElementById("baru2").style.backgroundColor = "#757575";
	document.getElementById("baru2").style.height = "1px";	
	document.getElementById("lbl3").style.color = "#757575";
	document.getElementById("lbl3").style.fontWeight = "normal";
	document.getElementById("usern2").style.color = "#757575";
}

function BarPassColor()
{
	
	document.getElementById("barp").style.backgroundColor = "rgba(0,112,234,1)";
	document.getElementById("barp").style.height = "2px";	
	document.getElementById("lbl1").style.color = "black";
	document.getElementById("lbl1").style.fontWeight = "bold";
	document.getElementById("passw").style.color = "black";
	
}

function BarRegPassColor()
{
	
	document.getElementById("barp1").style.backgroundColor = "rgba(0,112,234,1)";
	document.getElementById("barp1").style.height = "2px";	
	document.getElementById("lbl12").style.color = "black";
	document.getElementById("lbl12").style.fontWeight = "bold";
	document.getElementById("passw1").style.color = "black";
	
}

function BarPassColorOut()
{
	
	document.getElementById("barp").style.backgroundColor = "#757575";
	document.getElementById("barp").style.height = "1px";		
	document.getElementById("lbl1").style.color = "#757575";
	document.getElementById("lbl1").style.fontWeight = "normal";
	document.getElementById("passw").style.color = "#757575";
}

function BarRegPassColorOut()
{
	
	document.getElementById("barp1").style.backgroundColor = "#757575";
	document.getElementById("barp1").style.height = "1px";		
	document.getElementById("lbl12").style.color = "#757575";
	document.getElementById("lbl12").style.fontWeight = "normal";
	document.getElementById("passw1").style.color = "#757575";
}

function Registracija()
{
	document.getElementById("regform").style.visibility = "visible";
	document.getElementById("login").style.visibility = "hidden";
	
}

function Forgot()
{
	document.getElementById("forgotForm").style.visibility = "visible";
	document.getElementById("login").style.visibility = "hidden";
}

function Nazad()
{
	document.getElementById("regform").style.visibility = "hidden";
	document.getElementById("login").style.visibility = "visible";
}

function Nazad1()
{
	document.getElementById("forgotForm").style.visibility = "hidden";
	document.getElementById("login").style.visibility = "visible";
}