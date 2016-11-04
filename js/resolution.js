function rezolucija()
{
var height = window.innerHeight;

var width = window.innerWidth;
var zoom =(width/1920);


document.getElementById("sadrzajk").style.zoom=zoom;
document.getElementById("sadrzajk").style.zoom=zoom;
document.getElementById("sadrzajk").style.zoom=zoom;
document.getElementById("sadrzajk").style.zoom=zoom;
                                               zoom
document.getElementById("sadrzajk").style.zoom=zoom;


document.getElementById("fixedNav").style.zoom=zoom;



document.getElementById("navtop").style.zoom=zoom;


document.getElementById("dodavanje").style.zoom=zoom;




}


function linkovi() {
	var url = String(window.location.href);
	if(url.indexOf("?sve")!=-1) {
		document.getElementById("podatumu1").href="?sve&podatumu1"
		document.getElementById("podatumu2").href="?sve&podatumu2"
		document.getElementById("potekstu1").href="?sve&potekstu1"
		document.getElementById("potekstu2").href="?sve&potekstu2"
		
		document.getElementById("sve").style.backgroundColor="rgba(0,122,255,1)";
		document.getElementById("sve").style.color="white";
		
	} else if(url.indexOf("?licno")!=-1) {
		document.getElementById("podatumu1").href="?licno&podatumu1"
		document.getElementById("podatumu2").href="?licno&podatumu2"
		document.getElementById("potekstu1").href="?licno&potekstu1"
		document.getElementById("potekstu2").href="?licno&potekstu2"
		document.getElementById("licno").style.backgroundColor="rgba(0,122,255,1)";
		document.getElementById("licno").style.color="white";
		
	} else if(url.indexOf("?posao")!=-1) {
		document.getElementById("podatumu1").href="?posao&podatumu1"
		document.getElementById("podatumu2").href="?posao&podatumu2"
		document.getElementById("potekstu1").href="?posao&potekstu1"
		document.getElementById("potekstu2").href="?posao&potekstu2"
		document.getElementById("posao").style.backgroundColor="rgba(0,122,255,1)";
		document.getElementById("posao").style.color="white";
		
	} else if(url.indexOf("?skola")!=-1) {
		document.getElementById("podatumu1").href="?skola&podatumu1"
		document.getElementById("podatumu2").href="?skola&podatumu2"
		document.getElementById("potekstu1").href="?skola&potekstu1"
		document.getElementById("potekstu2").href="?skola&potekstu2"
		document.getElementById("skola").style.backgroundColor="rgba(0,122,255,1)";
		document.getElementById("skola").style.color="white";
	}
	
	
	if(url.indexOf("&podatumu1")!=-1) {
		document.getElementById("sve").href="?sve&podatumu1"
		document.getElementById("licno").href="?licno&podatumu1"
		document.getElementById("posao").href="?posao&podatumu1"
		document.getElementById("skola").href="?skola&podatumu1"
		
		document.getElementById("podatumu1").style.backgroundColor="rgba(0,122,255,1)";
		document.getElementById("podatumu1").style.color="white";
		
	} else if(url.indexOf("&podatumu2")!=-1) {
		document.getElementById("sve").href="?sve&podatumu2"
		document.getElementById("licno").href="?licno&podatumu2"
		document.getElementById("posao").href="?posao&podatumu2"
		document.getElementById("skola").href="?skola&podatumu2"
		
		document.getElementById("podatumu2").style.backgroundColor="rgba(0,122,255,1)";
		document.getElementById("podatumu2").style.color="white";
		
	} else if(url.indexOf("&potekstu1")!=-1) {
		document.getElementById("sve").href="?sve&potekstu1"
		document.getElementById("licno").href="?licno&potekstu1"
		document.getElementById("posao").href="?posao&potekstu1"
		document.getElementById("skola").href="?skola&potekstu1"
		
		document.getElementById("potekstu1").style.backgroundColor="rgba(0,122,255,1)";
		document.getElementById("potekstu1").style.color="white";
		
	} else if(url.indexOf("&potekstu2")!=-1) {
		document.getElementById("sve").href="?sve&potekstu2"
		document.getElementById("licno").href="?licno&potekstu2"
		document.getElementById("posao").href="?posao&potekstu2"
		document.getElementById("skola").href="?skola&potekstu2"
		
		document.getElementById("potekstu2").style.backgroundColor="rgba(0,122,255,1)";
		document.getElementById("potekstu2").style.color="white";
	}
	
}

function dodaj() {
	
	if(document.getElementById("dodavanje").style.visibility=="visible") {
	
	document.getElementById("addbtn").textContent="add";
	document.getElementById("dodavanje").style.visibility="hidden";
	} else {
	document.getElementById("addbtn").textContent="remove";
	document.getElementById("dodavanje").style.visibility="visible";
	}
	
	
	
	
}

function editor(n,id) {
if(document.getElementById("edit" + n).textContent=="mode_edit") {
	document.getElementById("ktekst" + n).readOnly =false;
	document.getElementById("edit" + n).textContent="check";
	
} else {
document.getElementById("edit" + n).textContent="mode_edit";
document.getElementById("ktekst" + n).readOnly =true;
var tekst = document.getElementById("ktekst" + n).value;

document.getElementById("edit" + n).href="?tekst=" + tekst + "&idbroj=" + id;

}

}


