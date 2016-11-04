
	
function calendar() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	
	mesec(mm, yyyy);


}

function naredniMesec() {
	
	var nm = document.getElementById("naredniMesec");
	
	var ng = document.getElementById("narednaGodina").value;
	nm= parseInt(nm.value)	+1;
	ng = parseInt(ng);
	
	if (nm==13) {
		nm=1;
		ng+=1;
	}
	
	
	
	mesec(nm, ng);
		
	
}

function prethodniMesec() {
	
	var nm = document.getElementById("naredniMesec");
	
	var ng = document.getElementById("narednaGodina").value;
	nm= parseInt(nm.value)	-1;
	ng = parseInt(ng);
	
	if (nm==0) {
		nm=12;
		ng-=1;
	}
	
	
	
	mesec(nm, ng);
		
	
}

function prikaziDatum(d, broj, danas, tr) {
	var nm = document.getElementById("naredniMesec").value;
	
	var ng = document.getElementById("narednaGodina").value;
	var i;
	

		for(i=1; i<=broj; i++) {
			
			if(i==d) {
				document.getElementById(i).className="dugmeklik";
				document.getElementById(i).style.borderColor = "blue";
				document.getElementById(i).style.border="1";
				
			} else if (i==danas && tr==true) {
				
				document.getElementById(i).className="dugmeactive";
				document.getElementById(i).style.borderColor = "red";
				document.getElementById(i).style.border="1";
			} else {
				
				document.getElementById(i).className="dugme";
				document.getElementById(i).style.borderColor = "red";
				document.getElementById(i).style.border="1";
			}
			
		}
	
	
			
		
		
		
		
		
	
		
		
	
}

function mesec(m, g)
{
	
	var div = document.getElementById("cal");
	div.innerHTML="";
	var day ="";
	var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  
  var naziviMeseca = ["Januar", "Februar", "Mart", "April", "Maj", "Jun",
  "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"];
  
  var naziviDana = ["P" , "U", "S" , "Č", "P" , "S" , "N"];

var danasDatum = new Date();
var danasMesec = danasDatum.getMonth()+1;
var danasGodina = danasDatum.getFullYear();
var danasDan = danasDatum.getDate();
var danas=false;


if(danasMesec==m && danasGodina==g) {
	danas=true;
	
}


	
switch (m) {
    case 1:
        day = "31";
        break;
    case 2:
	if(g % 4 ==0) {
		if (g % 100 ==0) {
			if(g % 400 ==0) {
				day = "29";
			} else {
				day = "28";	
			}
		} else {
			day = "29";
		}
	} else {
		
		day = "28";		
	}
        
        break;
    case 3:
        day = "31";
        break;
    case 4:
        day = "30";
        break;
    case 5:
        day = "31";
        break;
    case 6:
        day = "30";
        break;
    case 7:
        day = "31";
		break;
	case 8:
        day = "31";
        break;
	case 9:
        day = "30";
        break;
	case 10:
        day = "31";
        break;
	case 11:
        day = "30";
        break;
	 case 12:
		 day = "31";
        
}

div.innerHTML+="<label class='naziv' id=" + monthNames[m-1] + ">" + naziviMeseca[m-1] + " - " + g +"</label>";
div.innerHTML+="<button type='button' class='material-icons' id='prethodni' onclick='prethodniMesec();'>arrow_back</button>";
document.getElementById("prethodni").style.left = "40px";
document.getElementById("prethodni").style.width = "30px";
document.getElementById("prethodni").style.height = "30px";
document.getElementById("prethodni").style.top = "389px";

div.innerHTML+="<button type='button' class='material-icons' id='naredni' onclick='naredniMesec();'>arrow_forward</button>";
document.getElementById("naredni").style.left = "245px";
document.getElementById("naredni").style.width = "30px";
document.getElementById("naredni").style.height = "30px";
document.getElementById("naredni").style.top = "389px";


div.innerHTML+="<button type='button' class='narMesec' id='naredniMesec' value=" + m + "></button>";
div.innerHTML+="<button type='button' class='narGodina' id='narednaGodina' value=" + g + "></button>";
document.getElementById("naredniMesec").style.visibility="hidden";
document.getElementById("narednaGodina").style.visibility="hidden";

var brojDana = parseInt(day);


var i;
var h=475;
for(i=1; i<=brojDana; i++) {
	
	var myDate = new Date(monthNames[m-1] + i + ", " + g +" 10:10:00");
	var dan =parseInt(myDate.getDay());
	if(dan==0) {
		dan=7;
	}
	
	var pozicija = (dan * 40)-14;
	if (dan==1)
	{
		pozicija=23;
	}
	
if(i<8){
	var ids = 100 +i;
	var poz = 23 + (i-1)*40+3;
	div.innerHTML+="<button type='button' class='dugme1' id=" + ids +">" + naziviDana[i-1] +"</button>";
	document.getElementById(ids).style.left =  poz + "px";
	document.getElementById(ids).style.width = "30px";
	document.getElementById(ids).style.height = "30px";
	                        
	document.getElementById(ids).style.top = "430px";
}
	
	
	
	div.innerHTML+="<button type='button' class='dugme' id=" + i + " onclick='prikaziDatum(" + i + "," + brojDana + "," + danasDan + "," + danas + ");'>" + i +"</button>";
	document.getElementById(i).style.left =  pozicija + "px";
	document.getElementById(i).style.width = "30px";
	document.getElementById(i).style.height = "30px";
	
	
	document.getElementById(i).style.top =  h + "px";
	if(dan==7) {
		h+=40;		
	}

	if(danasDan==i && danas==true) {
		document.getElementById(i).className="dugmeactive";
		document.getElementById(i).style.borderColor = "red";
		document.getElementById(i).style.border="1";
		
	}
	
}

				
								

	
}

