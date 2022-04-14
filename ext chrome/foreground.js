//crear tkt
if(document.querySelector("#FO-TICKET-ADD > div.modal-header > h4") != null){ 
            var selectcrear = document.querySelector("#TKT-ORIGEN-ADD");
    var optiones = selectcrear.getElementsByTagName('OPTION');
    for(var i=0; i<optiones.length; i++) {
        if(optiones[i].innerHTML == 'CEOP') {
            var option3 = document.createElement("option");
             option3.text = "";
            selectcrear.add(option3,0);
            selectcrear.selectedIndex = 0;
            break;
        } else {
            selectcrear.removeChild(optiones[i]);6
            i--; // options have now less element, then decrease i

        }
    }
    document.querySelector("#TKT-ORIGEN-ADD > option:nth-child(2)").text ="CGS";
        var span = document.querySelector("#TKT-RESULTADO-ADD > div.modal-footer > span");
        span.innerHTML = '<button class="btn btn-info" style="float: left;" id="botoncopyar">Copiar</button>' + span.innerHTML

document.getElementById("botoncopyar").addEventListener("click", function() {
        var textcopy = document.querySelector("#TKT-RESULTADO-ADD > div.modal-body").textContent;
        const copyartext = textcopy.split(" ");
navigator.clipboard.writeText(copyartext[2]);
});

 } // fin crear tkt 


//home
 if(document.querySelector("body > div.contenedor > div > div.contenedorFiltros > div > div.col-xs-8 > div > div:nth-child(1) > div > span") != null){

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



    var theSelect = document.querySelector("#SECTOR-SELECT");
    var options = theSelect.getElementsByTagName('OPTION');
    for(var i=0; i<options.length; i++) {
        if(options[i].innerHTML == 'CEOP') {
        	break;
        } else {
        	theSelect.removeChild(options[i]);
            i--; // options have now less element, then decrease i

        }
    }
document.querySelector("#SECTOR-SELECT > option:nth-child(1)").text ="CGS";


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
 if(document.querySelector("#headingOne > div.collapsed > h4") != null){
	 console.log("test");
	 /*
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


function encambio(){
    var changeEvent = document.createEvent("HTMLEvents");
	changeEvent.initEvent("change", true, true);
	document.querySelector("#SECTOR-SELECT").dispatchEvent(changeEvent);
}

function hidecolas(asd){
    var value = theSelect.options[theSelect.selectedIndex].value;
    if(value == "5ad8a36251b99792eb60418a"){
    if(asd >= 8) {
         asd = asd - 8;
     document.querySelector("#BT-LIST-5ed7fae61d2eef305d258437").style = "margin-right:5px;margin-bottom:5px;"; //ftth
     document.querySelector("#BT-LIST-5ed7faa01d2eef2f334acf11").style = "margin-right:5px;margin-bottom:5px;"; //ftth obs
    } else {
     document.querySelector("#BT-LIST-5ed7fae61d2eef305d258437").style = "display: none;"; //ftth
     document.querySelector("#BT-LIST-5ed7faa01d2eef2f334acf11").style = "display: none;"; //ftth obs        
    }
        if(asd >= 4) {
         asd = asd - 4;
     document.querySelector("#BT-LIST-5c0ec88e1d2eef36c84aba06").style = "margin-right:5px;margin-bottom:5px;"; //sur cn
     document.querySelector("#BT-LIST-5b840d8d1d2eef1fd43ef1b8").style = "margin-right:5px;margin-bottom:5px;"; //sur padre
     document.querySelector("#BT-LIST-5b840d7a1d2eef2689578a51").style = "margin-right:5px;margin-bottom:5px;"; //sur obs
    } else {
     document.querySelector("#BT-LIST-5c0ec88e1d2eef36c84aba06").style = "display: none;"; //sur cn
     document.querySelector("#BT-LIST-5b840d8d1d2eef1fd43ef1b8").style = "display: none;"; //sur padre
     document.querySelector("#BT-LIST-5b840d7a1d2eef2689578a51").style = "display: none;"; //sur obs
    }
            if(asd >= 2) {
         asd = asd - 2;
     document.querySelector("#BT-LIST-5c0ec8551d2eef34e56f178e").style = "margin-right:5px;margin-bottom:5px;"; //noro cn
     document.querySelector("#BT-LIST-5c50a0ed1d2eef90b4266cf5").style = "margin-right:5px;margin-bottom:5px;"; //noro padre
     document.querySelector("#BT-LIST-5c509d1d1d2eef885171e256").style = "margin-right:5px;margin-bottom:5px;"; //noro obs
    } else {
     document.querySelector("#BT-LIST-5c0ec8551d2eef34e56f178e").style = "display: none;"; //noro cn
     document.querySelector("#BT-LIST-5c50a0ed1d2eef90b4266cf5").style = "display: none;"; //noro padre
     document.querySelector("#BT-LIST-5c509d1d1d2eef885171e256").style = "display: none;"; //noro obs 
    }
            if(asd >= 1) {
         asd = asd - 1;
     document.querySelector("#BT-LIST-5c0ec8481d2eef35f14776ea").style = "margin-right:5px;margin-bottom:5px;"; //caba cn
     document.querySelector("#BT-LIST-5c50a0c71d2eef90017a25e8").style = "margin-right:5px;margin-bottom:5px;"; //caba padre
     document.querySelector("#BT-LIST-5c509d0c1d2eef885c593698").style = "margin-right:5px;margin-bottom:5px;"; //caba obs
    } else {
     document.querySelector("#BT-LIST-5c0ec8481d2eef35f14776ea").style = "display: none;"; //caba cn
     document.querySelector("#BT-LIST-5c50a0c71d2eef90017a25e8").style = "display: none;"; //caba padre
     document.querySelector("#BT-LIST-5c509d0c1d2eef885c593698").style = "display: none;"; //caba obs
    }
} //if noc
if(value == "5c51e6e91d2eefaca43e751b"){
    if(asd >= 8) {
         asd = asd - 8;
    }
        if(asd >= 4) {
         asd = asd - 4;
     document.querySelector("#BT-LIST-5c58435c1d2eef14ac47000c").style = "margin-right:5px;margin-bottom:5px;"; //sur
     document.querySelector("#BT-LIST-60807d101d2eefd0a079352a").style = "margin-right:5px;margin-bottom:5px;"; //sur controlado
    } else {
     document.querySelector("#BT-LIST-5c58435c1d2eef14ac47000c").style = "display: none;"; //sur 
     document.querySelector("#BT-LIST-60807d101d2eefd0a079352a").style = "display: none;"; //sur controlado
    }
            if(asd >= 2) {
         asd = asd - 2;
     document.querySelector("#BT-LIST-5c5843111d2eef16b32452fe").style = "margin-right:5px;margin-bottom:5px;"; //noro controlado
     document.querySelector("#BT-LIST-60807d031d2eefd5e9135330").style = "margin-right:5px;margin-bottom:5px;"; //noro
    } else {
     document.querySelector("#BT-LIST-5c5843111d2eef16b32452fe").style = "display: none;"; //noro controlado
     document.querySelector("#BT-LIST-60807d031d2eefd5e9135330").style = "display: none;"; //noro
    }
            if(asd >= 1) {
         asd = asd - 1;
     document.querySelector("#BT-LIST-60807cf21d2eefd5434ab3da").style = "margin-right:5px;margin-bottom:5px;"; //caba controlado
     document.querySelector("#BT-LIST-5c5841611d2eef151a567b15").style = "margin-right:5px;margin-bottom:5px;"; //caba
    } else {
     document.querySelector("#BT-LIST-60807cf21d2eefd5434ab3da").style = "display: none;"; //caba controlado
     document.querySelector("#BT-LIST-5c5841611d2eef151a567b15").style = "display: none;"; //caba
    }
} // if admision
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
	 
// m5 v2 y v3
//if(window.location.href == ' http://m5v2.telecentro.net.ar/login2.php' || window.location.href == 'http://m5test.telecentro.net.ar/login2.php' && document.querySelector("#proceed-button") != null){
//        document.querySelector("#proceed-button").click ();

//}
	 if(document.querySelector("#proceed-button") != null){
        document.querySelector("#proceed-button").click ();

}
