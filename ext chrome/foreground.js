
(function() {
    'use strict';
  
    const urlUS = 'https://usuarios.telecentro.net.ar/scripts/postPerfilUrl.php?sistema=Moica%202&perfil=OP-GGR-CEOP';
    const urlMO = 'https://moica2.telecentro.net.ar/scripts/ajaxHome.php';
    const cycle_time = 30000; //15000
    const request_timeout = 3000;
   // var paramfinal;

    var request_to_moica = function() {

        var xhttp = new XMLHttpRequest();
        xhttp.timeout = request_timeout;
        xhttp.onreadystatechange = function() {
            if ( this.readyState != 4) {
                return;
            }
        };

        if(window.location.href == 'https://usuarios.telecentro.net.ar/home.php' && document.querySelector("body > div > nav > div > ul:nth-child(2) > li > a") != null ){ 
            console.log("reset Usuario");
        xhttp.open('GET', urlUS, true);
        xhttp.send();
        }
       if(window.location.host == "moica2.telecentro.net.ar"){
            console.log("reset Moica");
        xhttp.open('POST', urlMO, true);
        xhttp.send();
        }

  };

  // ATENCION ROJO !!!
  function atencion_rojo(){
    if(document.querySelector("#SECTOR-SELECT") != null){
        var thSelect = document.querySelector("#SECTOR-SELECT");
    var value = thSelect.options[thSelect.selectedIndex].value;
    if(value == "5c51e6e91d2eefaca43e751b"){ // si estoy en eventos
        var ChildBotone = document.querySelector("#TAB-LIST-COLAS").getElementsByTagName("button");
        for (i=0; i < ChildBotone.length-1; i++){
            var innerchild = ChildBotone[i].innerHTML;
            var stringo = innerchild.substring(innerchild.indexOf(">")+1,innerchild.lastIndexOf("<"))
           if (innerchild.includes("Atencion") && stringo > 0){
              ChildBotone[i].style.borderColor = "darkred";
              ChildBotone[i].style.color = "red";
            } else if (innerchild.includes("Atencion") && stringo == 0) {
              ChildBotone[i].style.borderColor = "";
              ChildBotone[i].style.color = "";
            }
       }
       
}}} // fin funcion roja 

// funcion mira5 href//
function mira5href(){
    if(window.location.host == "moica2.telecentro.net.ar"){
        if (document.querySelector("#TKT-VER-ALARMA-LINK-MIRA") != null){
            if (document.querySelector("#TKT-VER-ALARMA-LINK-MIRA").href != ''){
                document.querySelector("#TKT-VER-ALARMA-LINK-MIRA").href = document.querySelector("#TKT-VER-ALARMA-LINK-MIRA").href.replace("http://m5.","https://mira5.")
            }
        }
     }
} // fin funcion mira5href
  
  
    var init = function() {
        setInterval(request_to_moica, cycle_time);
        request_to_moica();
    };
    init();


    var initdos = function() {
        setInterval(atencion_rojo, 60000);
        atencion_rojo();


    };
    initdos();

    var inittres = function() {
    setInterval(mira5href, 1000);
    mira5href();
    };
    inittres();
  
  })();


  if (window.location.protocol === "http:" && window.location.host === "moica2.telecentro.net.ar"){
    window.location.protocol = "https:";
}



//crear tkt
if(document.querySelector("#FO-TICKET-ADD > div.modal-header > h4") != null){ 
            var selectcrear = document.querySelector("#TKT-ORIGEN-ADD");
    var optiones = selectcrear.getElementsByTagName('OPTION');
    for(var i=0; i<optiones.length; i++) {
        if(optiones[i].value == '5ad8a34351b99792552078e0') {
           // var option3 = document.createElement("option");
           //  option3.text = "";
           // selectcrear.add(option3,0);
           // selectcrear.selectedIndex = 0;
           // |5ad8a36251b99792eb60418a|    - Alarmas|
           // |5c1ab11a1d2eefd2f37a755e|    - Red Devoluciones|
           // |60649a5b1d2eefa66b3fbeb7|    - Tarea en curso o asociada|
           if(optiones[i+6].value == '60649a5b1d2eefa66b3fbeb7' && optiones[i+6].innerHTML == "&nbsp;&nbsp;&nbsp;&nbsp;- Tarea en curso o asociada"){selectcrear.removeChild(optiones[i+6]);}
           if(optiones[i+5].value == '5c1ab11a1d2eefd2f37a755e' && optiones[i+5].innerHTML == "&nbsp;&nbsp;&nbsp;&nbsp;- Red Devoluciones"){selectcrear.removeChild(optiones[i+5]);}
           if(optiones[i+1].value == '5ad8a36251b99792eb60418a' && optiones[i+1].innerHTML == "&nbsp;&nbsp;&nbsp;&nbsp;- Alarmas"){selectcrear.removeChild(optiones[i+1]);}
           
           
            break;
        } else {
            selectcrear.removeChild(optiones[i]);
            i--; // options have now less element, then decrease i

        }
    }
        var span = document.querySelector("#TKT-RESULTADO-ADD > div.modal-footer > span");
        span.innerHTML = '<button class="btn btn-info" style="float: left;" id="botoncopyar">Copiar</button>' + span.innerHTML

document.getElementById("botoncopyar").addEventListener("click", function() {
        var textcopy = document.querySelector("#TKT-RESULTADO-ADD > div.modal-body").textContent;
        const copyartext = textcopy.split(" ");
navigator.clipboard.writeText(copyartext[2]);
});
  /*  var newdocu = document.createElement('datalist');
    newdocu.innerHTML = document.querySelector("#TKT-ASUNTO-ADD").innerHTML;
    document.querySelector("#TKT-ASUNTO-ADD").parentNode.replaceChild(newdocu, document.querySelector("#TKT-ASUNTO-ADD"));

    newdocu.id = "TKT-ASUNTO-ADD";
    var newinput = document.createElement("input");
    newinput.setAttribute("list", "TKT-ASUNTO-ADD");
   // newinput.setAttribute("onChange", "Testeo()")
    newinput.className ="form-control";
    newinput.id = "TKT-ASUNTO-ADD3";
    //newinput.onchange("testeo()");
    newdocu.insertAdjacentElement('beforebegin', newinput);
*/
 } // fin crear tkt 


//home
 if(document.querySelector("body > div.contenedor > div > div.contenedorFiltros > div > div.col-xs-8 > div > div:nth-child(1) > div > span") != null){
    var theSelect = document.querySelector("#SECTOR-SELECT");
    var options = theSelect.getElementsByTagName('OPTION');
//    document.querySelector("#BT-LIST-5c50a0c71d2eef90017a25e8")
//document.querySelector("#BT-LIST-5c509d0c1d2eef885c593698")
//document.querySelector("#BT-LIST-5c50a0ed1d2eef90b4266cf5")
//document.querySelector("#BT-LIST-5c509d1d1d2eef885171e256")
//document.querySelector("#BT-LIST-5b840d8d1d2eef1fd43ef1b8")
//document.querySelector("#BT-LIST-5b840d7a1d2eef2689578a51")
document.querySelector("body > div.contenedor > div > div.contenedorFiltros > div > div.col-xs-8").className = "col-xs-7";
document.getElementsByClassName("rowActTkts")[0].style.width = "auto";
const parent = document.querySelector("body > div.contenedor > div > div.contenedorFiltros > div > div.col-xs-4");
parent.className = "col-xs-5";

  var newDiv = document.createElement("div");
  newDiv.className = "col-xs-5";

newDiv.innerHTML = 	`	<!-- Select Zona -->
								<div class="input-group">
									<span class="input-group-addon">Zona</span>
									<select class="form-control" id="ZONA-SELECT" multiple size="2">	
										<option value="1">Caba</option>
										<option value="2">NorOeste</option>
										<option value="4">Sur</option>
										<option value="8">FTTH</option>
									</select>
								</div>`;

parent.insertBefore(newDiv, parent.firstChild);




    for(var i=0; i<options.length; i++) {
        if(options[i].value == '5ad8a34351b99792552078e0') {
        	break;
        } else {
        	theSelect.removeChild(options[i]);
            i--; // options have now less element, then decrease i

        }
    }


// realiza el cambio de sector por el de ceop
var elementExists = document.querySelector("#BT-LIST-5f316bcf1d2eef8fbf5a4f4c");
if(elementExists){
encambio();}
// realiza el cambio de sector por el de ceop


// agarra los numeros de los selected del select ce zona 
 qzona = document.querySelector("#ZONA-SELECT");


chrome.runtime.sendMessage({ 
    message: "get_zona"
}, response => {
    if (response.message === 'success') {
    	var zz = `${response.payload}`;
        var x = document.getElementById('ZONA-SELECT').getElementsByTagName('option');
        if(zz >= 8) {
    	 zz = zz - 8;
     x[3].selected = true;	
    }
            if(zz >= 4) {
    	 zz = zz - 4;
     x[2].selected = true;	
    }
            if(zz >= 2) {
    	 zz = zz - 2;
     x[1].selected = true;	
    }
            if(zz >= 1) {
         zz = zz - 1;
     x[0].selected = true;  
    } 
    hidecolas(`${response.payload}`);
    }
                });


qzona.addEventListener('change', () => {
    let totalselec = 0;
            for (var option of qzona.options)
                {
                if (option.selected) {
                  totalselec += Number(option.value);
                }
            }
            //totalselec es la suma de los selects
    chrome.runtime.sendMessage({ 
        message: "change_zona",
        payload: totalselec
    }, response => {
        if (response.message === 'success') {
            hidecolas(`${totalselec}`);
        }
    });
});



} // home



//buscar tkt boton limpiar lo volvieron a romper
 /*if(document.querySelector("#headingOne > div.collapsed > h4") != null){
	 console.log("test");
 }
	 
    document.querySelector("#collapse-Seach > div > div.btn-group > button.btn.btn-warning").addEventListener("click", function() {
        document.querySelector("#TKT-BUSCAR-TIPO-RED").value = null;
    const children = document.querySelector("#myDropdown").childNodes;
    // iterate over all child nodes
    children.forEach(option => {
    if(option.style.backgroundColor == 'lightblue'){
        option.click();
    }
    });

});*/

 // buscar nodo
 /*
 const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);
 const product = urlParams.get('nodo');
 console.log(queryString);
// ?nodo=XX00XX
 if (product != 'null'){
console.log(product);
// nodo

document.getElementById("TKT-BUSCAR-ESTADO").value = ['Abierto', 'Completado', 'En Curso', 'Pausado', 'Terminado'];
document.getElementById("TKT-BUSCAR-NODO-autocom").value = product + ", ";
buscarParametrosBusqueda();
} //buscar tkt
*/

function encambio(){
    var changeEvent = document.createEvent("HTMLEvents");
	changeEvent.initEvent("change", true, true);
	document.querySelector("#SECTOR-SELECT").dispatchEvent(changeEvent);
}

function hidecolas(asd){
    var value = theSelect.options[theSelect.selectedIndex].value;
    if(value == "5ad8a36251b99792eb60418a"){ // IF ALARMAS
        if(document.querySelector("#BT-LIST-5c50a0c71d2eef90017a25e8") != null && document.querySelector("#BT-LIST-5c50a0c71d2eef90017a25e8").innerHTML == "Z - No Usar 4 (<span>0</span>)"){
            document.querySelector("#BT-LIST-5c50a0c71d2eef90017a25e8").style = "display: none;"} // z - no usar 4
        if(document.querySelector("#BT-LIST-5c50a0ed1d2eef90b4266cf5") != null && document.querySelector("#BT-LIST-5c50a0ed1d2eef90b4266cf5").innerHTML == "Z - No Usar 5 (<span>0</span>)"){
            document.querySelector("#BT-LIST-5c50a0ed1d2eef90b4266cf5").style = "display: none;"} // z - no usar 5
        if(document.querySelector("#BT-LIST-5b840d8d1d2eef1fd43ef1b8") != null && document.querySelector("#BT-LIST-5b840d8d1d2eef1fd43ef1b8").innerHTML == "Z - No Usar 6 (<span>0</span>)"){
            document.querySelector("#BT-LIST-5b840d8d1d2eef1fd43ef1b8").style = "display: none;"} // z - no usar 6
        if(document.querySelector("#BT-LIST-5c509d0c1d2eef885c593698") != null && document.querySelector("#BT-LIST-5c509d0c1d2eef885c593698").innerHTML == "Z No Usar (<span>0</span>)"){
            document.querySelector("#BT-LIST-5c509d0c1d2eef885c593698").style = "display: none;"} // z - no usar
        if(document.querySelector("#BT-LIST-5c509d1d1d2eef885171e256") != null && document.querySelector("#BT-LIST-5c509d1d1d2eef885171e256").innerHTML == "Z No Usar 2 (<span>0</span>)"){
            document.querySelector("#BT-LIST-5c509d1d1d2eef885171e256").style = "display: none;"} // z - no usar 2
        if(document.querySelector("#BT-LIST-5b840d7a1d2eef2689578a51") != null && document.querySelector("#BT-LIST-5b840d7a1d2eef2689578a51").innerHTML == "Z No usar 3 (<span>0</span>)"){
            document.querySelector("#BT-LIST-5b840d7a1d2eef2689578a51").style = "display: none;"} // z - no usar 3
         
    if(asd >= 8) {
         asd = asd - 8;
     document.querySelector("#BT-LIST-5ed7fae61d2eef305d258437").style = "margin-right:5px;margin-bottom:5px;"; //ftth cn
     document.querySelector("#BT-LIST-5ed7faa01d2eef2f334acf11").style = "margin-right:5px;margin-bottom:5px;"; //ftth obs
    } else {
     document.querySelector("#BT-LIST-5ed7fae61d2eef305d258437").style = "display: none;"; //ftth cn
     document.querySelector("#BT-LIST-5ed7faa01d2eef2f334acf11").style = "display: none;"; //ftth obs        
    }
        if(asd >= 4) {
         asd = asd - 4;
     document.querySelector("#BT-LIST-5c0ec88e1d2eef36c84aba06").style = "margin-right:5px;margin-bottom:5px;"; //hfc sur
    } else {
     document.querySelector("#BT-LIST-5c0ec88e1d2eef36c84aba06").style = "display: none;"; //hfc sur
    }
            if(asd >= 2) {
         asd = asd - 2;
     document.querySelector("#BT-LIST-5c0ec8551d2eef34e56f178e").style = "margin-right:5px;margin-bottom:5px;"; //hfc noro
    } else {
     document.querySelector("#BT-LIST-5c0ec8551d2eef34e56f178e").style = "display: none;"; //hfc noro
    }
            if(asd >= 1) {
         asd = asd - 1;
     document.querySelector("#BT-LIST-5c0ec8481d2eef35f14776ea").style = "margin-right:5px;margin-bottom:5px;"; //hfc caba
    } else {
     document.querySelector("#BT-LIST-5c0ec8481d2eef35f14776ea").style = "display: none;"; //hfc caba
    }
} //if ALARMAS
// IF DE EVENTOS
if(value == "5c51e6e91d2eefaca43e751b"){
    if(asd >= 8) {
         asd = asd - 8;
         ChildBotone = document.querySelector("#TAB-LIST-COLAS").getElementsByTagName("button");
         for (i=0;i < ChildBotone.length-1; i++){
             if (ChildBotone[i].innerHTML.includes("FTTH")){
             ChildBotone[i].style ="margin-right:5px;margin-bottom:5px;"}
         }
    } else {
        ChildBotone = document.querySelector("#TAB-LIST-COLAS").getElementsByTagName("button");
        for (i=0; i < ChildBotone.length-1; i++){
            if (ChildBotone[i].innerHTML.includes("FTTH")){
            ChildBotone[i].style ="display: none;"}
        }
    }
        if(asd >= 4) {
         asd = asd - 4;
         ChildBotone = document.querySelector("#TAB-LIST-COLAS").getElementsByTagName("button");
         for (i=0; i < ChildBotone.length-1; i++){
             if (ChildBotone[i].innerHTML.includes("Sur")){
             ChildBotone[i].style ="margin-right:5px;margin-bottom:5px;"}
         }
    } else {
        ChildBotone = document.querySelector("#TAB-LIST-COLAS").getElementsByTagName("button");
        for (i=0; i < ChildBotone.length-1; i++){
            if (ChildBotone[i].innerHTML.includes("Sur")){
            ChildBotone[i].style ="display: none;"}
        }
    }
            if(asd >= 2) {
         asd = asd - 2;
         ChildBotone = document.querySelector("#TAB-LIST-COLAS").getElementsByTagName("button");
         for (i=0; i < ChildBotone.length-1; i++){
             if (ChildBotone[i].innerHTML.includes("Noroeste")){
             ChildBotone[i].style ="margin-right:5px;margin-bottom:5px;"}
         }
    } else {
        ChildBotone = document.querySelector("#TAB-LIST-COLAS").getElementsByTagName("button");
        for (i=0; i < ChildBotone.length-1; i++){
            if (ChildBotone[i].innerHTML.includes("Noroeste")){
            ChildBotone[i].style ="display: none;"}
        }
    }
            if(asd >= 1) {
         asd = asd - 1;
         ChildBotone = document.querySelector("#TAB-LIST-COLAS").getElementsByTagName("button");
         for (i=0; i < ChildBotone.length-1; i++){
             if (ChildBotone[i].innerHTML.includes("Caba")){
             ChildBotone[i].style ="margin-right:5px;margin-bottom:5px;"}
             if (ChildBotone[i].innerHTML.includes("Atencion")){
                ChildBotone[i].style ="margin-right:5px;margin-bottom:5px;"}
         }
    } else {
        ChildBotone = document.querySelector("#TAB-LIST-COLAS").getElementsByTagName("button");
        for (i=0; i < ChildBotone.length-1; i++){
            if (ChildBotone[i].innerHTML.includes("Caba")){
            ChildBotone[i].style ="display: none;"}
        }
    }

} // IF DE EVENTOS
// if DEVOLUCIONES
if(value == "5c1ab11a1d2eefd2f37a755e"){
    if(asd >= 8) {
         asd = asd - 8;
     document.querySelector("#BT-LIST-5eb3e63a1d2eef24c424f7f8").style = "margin-right:5px;margin-bottom:5px;"; //FTTH
    } else {
     document.querySelector("#BT-LIST-5eb3e63a1d2eef24c424f7f8").style = "display: none;"; //FTTH
    }
        if(asd >= 4) {
         asd = asd - 4;
     document.querySelector("#BT-LIST-5c1ab1461d2eefd2582ce99a").style = "margin-right:5px;margin-bottom:5px;"; //sur
     document.querySelector("#BT-LIST-5c1cef861d2eef797854be46").style = "margin-right:5px;margin-bottom:5px;"; //sur in obs
     document.querySelector("#BT-LIST-606f0d0c1d2eef33613db3b2").style = "margin-right:5px;margin-bottom:5px;"; //sur RM/RL OBS
     document.querySelector("#BT-LIST-5c5463da1d2eefada41df8f8").style = "margin-right:5px;margin-bottom:5px;"; //sur in con hijo
    } else {
     document.querySelector("#BT-LIST-5c1ab1461d2eefd2582ce99a").style = "display: none;"; //sur 
     document.querySelector("#BT-LIST-5c1cef861d2eef797854be46").style = "display: none;"; //sur in obs
     document.querySelector("#BT-LIST-606f0d0c1d2eef33613db3b2").style = "display: none;"; //sur RM/RL OBS
     document.querySelector("#BT-LIST-5c5463da1d2eefada41df8f8").style = "display: none;"; //sur in con hijo
    }
            if(asd >= 2) {
         asd = asd - 2;
     document.querySelector("#BT-LIST-5c584aa71d2eef1ac94bb459").style = "margin-right:5px;margin-bottom:5px;"; //noro in obs
     document.querySelector("#BT-LIST-606f0c171d2eef2769313c89").style = "margin-right:5px;margin-bottom:5px;"; //noro in con hijo
     document.querySelector("#BT-LIST-5c5463e61d2eefad7858e60a").style = "margin-right:5px;margin-bottom:5px;"; //noro rm/rl obs
     document.querySelector("#BT-LIST-5c1ab13e1d2eefd33f392966").style = "margin-right:5px;margin-bottom:5px;"; //noro
    } else {
     document.querySelector("#BT-LIST-5c584aa71d2eef1ac94bb459").style = "display: none;"; //noro in obs
     document.querySelector("#BT-LIST-606f0c171d2eef2769313c89").style = "display: none;"; //noro in con hijo
     document.querySelector("#BT-LIST-5c5463e61d2eefad7858e60a").style = "display: none;"; //noro rm/rl obs
     document.querySelector("#BT-LIST-5c1ab13e1d2eefd33f392966").style = "display: none;"; //noro
    }
            if(asd >= 1) {
         asd = asd - 1;
     document.querySelector("#BT-LIST-5c1ab1211d2eefd2f37a755f").style = "margin-right:5px;margin-bottom:5px;"; //caba
     document.querySelector("#BT-LIST-5c2365af1d2eef5ade631182").style = "margin-right:5px;margin-bottom:5px;"; //caba in obs
     document.querySelector("#BT-LIST-606f0af51d2eef2cce4eb4a1").style = "margin-right:5px;margin-bottom:5px;"; //caba in con hijo
     document.querySelector("#BT-LIST-5c1cf3901d2eef82620e0364").style = "margin-right:5px;margin-bottom:5px;"; //caba rm/rl obs
    } else {
     document.querySelector("#BT-LIST-5c1ab1211d2eefd2f37a755f").style = "display: none;"; //caba
     document.querySelector("#BT-LIST-5c2365af1d2eef5ade631182").style = "display: none;"; //caba in obs
     document.querySelector("#BT-LIST-606f0af51d2eef2cce4eb4a1").style = "display: none;"; //caba in con hijo
     document.querySelector("#BT-LIST-5c1cf3901d2eef82620e0364").style = "display: none;"; //caba rm/rl obs
    }
} // if devoluciones
}


// if iway

if(window.location.href == 'http://iway.telecentro.net.ar/index.php' || window.location.href == 'http://iway.telecentro.net.ar/'){
        window.location.href = "http://iway.telecentro.net.ar/body.php";
}
	 

// if usuarios
if(window.location.href == 'https://usuarios.telecentro.net.ar/home.php'){
    document.querySelector("body > div > div > div > div:nth-child(10) > a > div")
//style
    newStyle = ` <style>
    #usefull_nav {
        display: none;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        padding-right: 15px
        padding-left: 15px

        border-radius: 0 0 5px 5px;
        box-shadow: 15px 10px 8px 2px #000;
    }
    #us_access_nav {
        font-size: 20px;
        display: block;
        position: relative;
        top: 0;
        right: 0;
        width: 100%;
        height: 40px;
        overflow: hidden;
        background: white 10px 10px / 20px 20px no-repeat;
        padding-left: 45px;
        background-image: repeating-linear-gradient(#ccc, #ccc 2px, #fff 2px, #fff 4px);
        z-index: 1;
        text-align: left;
    }
</style>
    `;
   let head = document.getElementsByTagName("head")[0];
head.insertAdjacentHTML("beforeend", newStyle);

let elements = document.getElementsByTagName("span");
let i;

for (i = elements.length - 1; i > 0; i--) {
//for (i = 0; i < elements.length; i++) {

  if (elements[i].textContent == "B2B" || 
        elements[i].textContent == "Gestión de requerimientos" || 
        elements[i].textContent == "IPAM" || 
        elements[i].textContent == "Monitoreo Hubs" || 
        elements[i].textContent == "Monitoreo avanzado de clientes" ||
        elements[i].textContent == "Monitoreo de visitas" ||
        elements[i].textContent == "Sistema de Eventos de Servicios" ||
        elements[i].textContent == "Sonda a Sistemas"){
            elements[i].parentElement.parentElement.remove();
  }}
//nav Bars
newNav1 = `
<br>
<p><button id="us_access_nav">Otros Botones</button></p>
<nav id="usefull_nav" style="display: none;">
<div class="row" style="margin:0px;padding:0px;padding-bottom: 5px">
    <div class="col-md-2" style="margin:0px;padding:4px;">
        <a href="scripts/postPerfilUrl.php?sistema=B2B&amp;perfil=OP-GGR-CEOP" target="_blank" style="border:1px solid #e53030;" class="btn btn-default btn-home" role="button">
        <div class="btn-home-icon" style="background-color: #e53030;background-image:url(https://b2bdb.telecentro.net.ar/css/logo.png);">&nbsp;</div>
        <span>B2B</span>
        </a>
    </div>
    <div class="col-md-2" style="margin:0px;padding:4px;">
        <a href="scripts/postPerfilUrl.php?sistema=Gestión de requerimientos&amp;perfil=ADMIN" target="_blank" style="border:1px solid #74a9d8;" class="btn btn-default btn-home" role="button">
        <div class="btn-home-icon" style="background-color: #74a9d8;background-image:url(http://gestionrq.telecentro.net.ar/img/icon.png);">&nbsp;</div>
        <span>Gestión de requerimientos</span>
        </a>
    </div>
    <div class="col-md-2" style="margin:0px;padding:4px;">
							<a href="scripts/postPerfilUrl.php?sistema=IPAM&amp;perfil=Administrator" target="_blank" style="border:1px solid #000000;" class="btn btn-default btn-home" role="button">
							<div class="btn-home-icon" style="background-color: #000000;">&nbsp;</div>
							<span>IPAM</span>
							</a>
	</div>
    <div class="col-md-2" style="margin:0px;padding:4px;">
							<a href="scripts/postPerfilUrl.php?sistema=Monitoreo Hubs&amp;perfil=PUBLIC" target="_blank" style="border:1px solid black;" class="btn btn-default btn-home" role="button">
							<div class="btn-home-icon" style="">&nbsp;</div>
							<span>Monitoreo Hubs</span>
							</a>
	</div>
    <div class="col-md-2" style="margin:0px;padding:4px;">
							<a href="scripts/postPerfilUrl.php?sistema=Monitoreo avanzado de clientes&amp;perfil=OP-GGR-CEOP" target="_blank" style="border:1px solid black;" class="btn btn-default btn-home" role="button">
							<div class="btn-home-icon" style="">&nbsp;</div>
							<span>Monitoreo avanzado de clientes</span>
							</a>
	</div>
    <div class="col-md-2" style="margin:0px;padding:4px;">
							<a href="scripts/postPerfilUrl.php?sistema=Monitoreo de visitas&amp;perfil=OP-GGR-CEOP" target="_blank" style="border:1px solid #000000;" class="btn btn-default btn-home" role="button">
							<div class="btn-home-icon" style="background-color: #000000;">&nbsp;</div>
							<span>Monitoreo de visitas</span>
							</a>
	</div>
    <div class="col-md-2" style="margin:0px;padding:4px;">
							<a href="scripts/postPerfilUrl.php?sistema=Sistema de Eventos de Servicios&amp;perfil=PUBLIC" target="_blank" style="border:1px solid #0d47a1;" class="btn btn-default btn-home" role="button">
							<div class="btn-home-icon" style="background-color: #0d47a1;background-image:url(https://ses.telecentro.net.ar/images/favicon.ico);">&nbsp;</div>
							<span>Sistema de Eventos de Servicios</span>
							</a>
	</div>
    <div class="col-md-2" style="margin:0px;padding:4px;">
							<a href="scripts/postPerfilUrl.php?sistema=Sonda a Sistemas&amp;perfil=OP-GGR-CEOP" target="_blank" style="border:1px solid black;" class="btn btn-default btn-home" role="button">
							<div class="btn-home-icon" style="">&nbsp;</div>
							<span>Sonda a Sistemas</span>
							</a>
	</div>
</div>
</nav>
`;
divcontainer = document.querySelector("body > div > div");
divcontainer.insertAdjacentHTML("beforeend", newNav1);

//script
document.getElementById("us_access_nav").addEventListener("click", function() {
    var nav = document.getElementById('usefull_nav');
if (nav.style.display == ''||nav.style.display == "block"){
nav.style.display = "none";
} else {
nav.style.display = "block";
}
});
}

//if ver - busacr tkt
if (document.querySelector("body > div.contenedor > div > div > div.modal-header > h4") != null && document.querySelector("#FO-TICKET-ADD > div.modal-header > h4") == null){
    var elh4 = document.querySelector("body > div.contenedor > div > div > div.modal-header > h4");
    var ticketnumero = elh4.innerHTML.split(":", "2")[1].slice(1,13);
    elh4.innerHTML = elh4.innerHTML + '<button class="btn btn-info" id="botonbuscar">Buscar ticket</button>'

document.getElementById("botonbuscar").addEventListener("click", function() {
    var h4el = document.querySelector("body > div.contenedor > div > div > div.modal-header > h4");
    var tkturl = h4el.innerHTML.split(":", "2")[1].slice(1,13);
    var newURL = "https://moica2.telecentro.net.ar/buscarTicket.php?ticket=" + tkturl;
    window.location = newURL;
});
} // fin if ver - buscar tkt


chrome.runtime.onMessage.addListener(function (request) {
    document.activeElement.value = request.text
});

