function datum() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth();
	var yyyy = today.getFullYear();
	var dan = today.getDay();
	
    var naziviMeseca = ["Januar", "Februar", "Mart", "April", "Maj", "Jun",
  "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"];
  
	var dani = ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"] 
  
  
	
	document.getElementById("dat").textContent = dd;
	document.getElementById("godina").textContent = yyyy;
	document.getElementById("mesec").textContent = naziviMeseca[mm].substring(0,3).toUpperCase();
	document.getElementById("dant").textContent = dani[dan];
	
	document.getElementById("danDodaj").textContent = dd;
	document.getElementById("hiddenDan").value = dd;
	
	if (dd<10) {
		document.getElementById("danDodaj").style.paddingLeft="3%";
		
	} else {
		
		document.getElementById("danDodaj").style.paddingLeft="2.3%";

	}
	
	document.getElementById("mesecDodaj").textContent = mm+1;
	document.getElementById("hiddenMesec").value = mm+1;
	
	if (mm+1<10) {
		document.getElementById("mesecDodaj").style.paddingLeft="8.8%";
	} else {
		
		document.getElementById("mesecDodaj").style.paddingLeft="8.2%";
		
	}
	
	document.getElementById("godinaDodaj").textContent = yyyy;
	document.getElementById("hiddenGodina").value = yyyy;
}

function promeniDatum(n) {
	var dan = document.getElementById("danDodaj").textContent;
	var mesec = document.getElementById("mesecDodaj").textContent;
	var godina = document.getElementById("godinaDodaj").textContent;
	var day;
	
	switch (parseInt(mesec)) {
    case 1:
        day = "31";
        break;
    case 2:
	if(godina % 4 ==0) {
		if (godina % 100 ==0) {
			if(godina % 400 ==0) {
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

	
	switch (n) {
		
		case 1:
			document.getElementById("danDodaj").textContent= parseInt(dan)+1;
			if(dan==parseInt(day))
			{
				document.getElementById("danDodaj").textContent=1;
			}
			break;
		case 2:
			document.getElementById("danDodaj").textContent= parseInt(dan)-1;
			if(dan=="1")
			{
				document.getElementById("danDodaj").textContent=day;
			}
			
			break;
		case 3:
			document.getElementById("mesecDodaj").textContent= parseInt(mesec)+1;
			if(mesec=="12")
			{
				document.getElementById("mesecDodaj").textContent="1";
			}
			
			break;
		case 4:
			document.getElementById("mesecDodaj").textContent= parseInt(mesec)-1;
			if(mesec=="1")
			{
				document.getElementById("mesecDodaj").textContent="12";
			}
			break;
		case 5:
			document.getElementById("godinaDodaj").textContent= parseInt(godina)+1;
			break;
		case 6:
			document.getElementById("godinaDodaj").textContent= parseInt(godina)-1;
			break;
		
	}
	
	var trd = parseInt(document.getElementById("danDodaj").textContent);
	var trm = parseInt(document.getElementById("mesecDodaj").textContent);
	
	if (trd<10) {
		document.getElementById("danDodaj").style.paddingLeft="3%";
		
	} else {
		
		document.getElementById("danDodaj").style.paddingLeft="2.3%";

	}
	
	
	
	if (trm<10) {
		document.getElementById("mesecDodaj").style.paddingLeft="8.8%";
	} else {
		
		document.getElementById("mesecDodaj").style.paddingLeft="8.2%";
		
	}
	
	document.getElementById("hiddenDan").value = document.getElementById("danDodaj").textContent;
	document.getElementById("hiddenMesec").value = document.getElementById("mesecDodaj").textContent;
	document.getElementById("hiddenGodina").value = document.getElementById("godinaDodaj").textContent;
	
}



function dodajsve() {




	var x = document.getElementById("rezultati").options.length;
	
	
	

	




var i;
for(i=0; i<x; i++) {
	
	var y = document.getElementById("rezultati").options.item(i).text;
	
	var tekst = y.substring(6, y.indexOf(", vrsta"));
	var vrsta = y.substring(y.indexOf(", vrsta")+8,y.indexOf(", datum"));
	var datum = y.substring(y.indexOf("datum=")+6, y.indexOf(", id="));
	var id = y.substring(y.indexOf("id=")+3, y.indexOf("krajtekstavalue"));
	
	switch(vrsta) {
		case "1":
			vrsta="Lično";
			break;
		case "2":
			vrsta="Posao";
			break;
		case "3":
			vrsta="Škola";
			break;
				
	}
	
	
	kreiranje(i,id);
	
	document.getElementById(i+ "kh").textContent=datum;
	document.getElementById(i+ "kh1").textContent=vrsta;
	document.getElementById("ktekst" + i).textContent=tekst;
	
}

	

}


function kreiranje(broj, id) {
	
	var red = parseInt((broj+1)/4);
	var kolona = ((broj+1)%4);
	
	if ((broj+1)% 4==0) {
		red-=1;
		kolona=4;
				
	}
	
		
		
		
	var levo= kolona*20;
	var gore = red*46+9;
	
	

	//Kartica
	var div = document.createElement("div");
	
	div.id="kartica" + broj;
	//stil
	div.style.position="absolute";
	div.style.width = "300px";
	div.style.height = "400px";
	div.style.backgroundColor="#ffffff";
	div.style.borderRadius="3px";
	div.style.boxShadow="5px 1px 3px rgba(0, 0, 0, 0.12), 1px 0px 5px rgba(0, 0, 0, 0.24)";
	div.style.padding="50px 0 10px 50px";
	div.style.visibility="visible";

	
	//pozicija
	div.style.left = levo + "%";
	div.style.top = gore + "%";
	
	
	document.getElementById("sadrzajk").appendChild(div);
	
	//------------------------------------------
	
	//Kartica-Header
	var div1 = document.createElement("div");
	div1.id="karticaHeader" + broj;
	
	//stil
	div1.style.position="absolute";
	div1.style.width = "100%";
	div1.style.backgroundColor="rgba(0,112,234,1)";
	div1.style.boxShadow="5px 1px 3px rgba(0, 0, 0, 0.12), 1px 0px 5px rgba(0, 0, 0, 0.24)";
	div1.style.height = "10%";
	div1.style.top = "0";
	div1.style.left = "0";
	div1.style.display="inline-block";
	
	document.getElementById("kartica" + broj).appendChild(div1);
	//label - Header
	document.getElementById("karticaHeader" + broj).innerHTML+="<a href='?id=" + id +"' id='clear" + broj + "' class='material-icons'>clear</a>";
	document.getElementById("karticaHeader" + broj).innerHTML+="<label id='"+ broj + "kh' class='datumi1' >24.05.1996.</label>";

	//------------------------------------------------
	
	//Kartica-Header1
	
	var div2 = document.createElement("div");
	div2.id="kartica1Header" + broj;
	//stil
	div2.style.position="absolute";
	div2.style.width = "100%";
	div2.style.backgroundColor="rgba(0,122,255,1)";
	div2.style.boxShadow="5px 1px 3px rgba(0, 0, 0, 0.12), 1px 0px 5px rgba(0, 0, 0, 0.24)";
	div2.style.height = "10%";
	div2.style.top = "10%";
	div2.style.left = "0";
	div2.style.display="inline-block";
	
	document.getElementById("kartica" + broj).appendChild(div2);
	//label - Header
	document.getElementById("kartica1Header" + broj).innerHTML+="<label id='" + broj + "kh1' class='vrsta'>Posao</label>";
	

	//------------------------------------------------
	
	//Kartica-Tekst
	document.getElementById("kartica" +broj).innerHTML+= "<textarea id='ktekst" + broj +"' class='karticatekst' readonly>Tekstassd.</textarea>";
	
	//------------------------------------------------
	
	//Kartica-Footer
	
	var div3 = document.createElement("div");
	div3.id="karticaFooter" +broj;
	//stil
	div3.style.position="absolute";
	div3.style.width = "100%";
	div3.style.backgroundColor="#555";
	div3.style.boxShadow="5px 1px 3px rgba(0, 0, 0, 0.12), 1px 0px 5px rgba(0, 0, 0, 0.24)";
	div3.style.height = "10%";
	div3.style.top = "89.9%";
	div3.style.left = "0";
	
	   
	document.getElementById("kartica" + broj).appendChild(div3);  
	
	//Label-Footer

	document.getElementById("karticaFooter" + broj).innerHTML+="<a id='edit" + broj + "' class='material-icons' onclick='editor(" + broj + ", " + id +");'>mode_edit</a>";
	
	
	
	//stil
	

	
	document.getElementById("edit" + broj).style.color="white";
	document.getElementById("edit" + broj).style.width="100%";
	document.getElementById("edit" + broj).style.fontSize="16px";
	document.getElementById("edit" + broj).style.textAlign="center";
	document.getElementById("edit" + broj).style.lineHeight="100%";
	document.getElementById("edit" + broj).style.height="100%";
	document.getElementById("edit" + broj).style.marginTop="4%";
	document.getElementById("edit" + broj).style.fontWeight="bold";
	document.getElementById("edit" + broj).style.cursor="pointer";
	
	
	document.getElementById("clear" + broj).style.position="absolute";
	document.getElementById("clear" + broj).style.color="white";
	document.getElementById("clear" + broj).style.marginTop="0%";
	document.getElementById("clear" + broj).style.marginLeft="92%";
	document.getElementById("clear" + broj).style.fontSize="24px";
	document.getElementById("clear" + broj).style.cursor="pointer";
	


	
	
	

	
	
	} 

	
	
	
	
	
