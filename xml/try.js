var formElement=null;// Inicializado a "null"
var secret=0; // Inicializado a "0"

// Al cargar la págin...
window.onload = function(){
	// pide los datos, lee preguntas.xml del servidor (por http)
	var xhttp = XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			gestionarXml(this);
		}
	};
	xhttp.open("GET", "https://github.com/LBarry97/Prueba1/blob/master/xml/preguntas.xml", true);
	xhttp.send();
	
	// Para corregir gestionamos el contenido introducido en el formoulario
	formElement=document.getElementById("myform");
	formElement.onsubmit=function(){
		var s=formElement.element[0]value;
		if (s==secret){
			alert ("Correcto :)")
		}else{
			alert ("Incorrecto :(")
		}
		return false;
	}
}

// Funcion donde cogemos los datos del xml y los ponemos en el html
function gestionarXml(dadesXml){
	var xmlDoc = dadesXml.responseXML;
	document.getElementById("title").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
	secret=parseInt(xmlDoc.getElementsByTagName("answer")[0].childNodes.nodeValue);
}