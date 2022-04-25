
window.addEventListener('DOMContentLoaded', function() {
    // your button here
    var link = document.getElementById('vertktbutt');
    var link2 = document.getElementById('buscarTkt');
    var link3 = document.getElementById('CrearTkt');
    // onClick's logic below:
    link.addEventListener('click', function() {
      var inpt = document.getElementById("vertkt").value;
        var newURL = "http://moica2.telecentro.net.ar/verTicket.php?ticket=" + inpt;
        chrome.tabs.create({ url: newURL });
    });
        link2.addEventListener('click', function() {
          var inpt = document.getElementById("vertkt").value;
        var newURL = "http://moica2.telecentro.net.ar/buscarTicket.php?ticket=" + inpt;
        chrome.tabs.create({ url: newURL });
    });
        link3.addEventListener('click', function() {
          var inpt = document.getElementById("vertkt").value;
        var newURL = "https://moica2.telecentro.net.ar/viewCrearTktManual.php";
        chrome.tabs.create({ url: newURL });
    });
/*        link4.addEventListener('click', function() {
          var inpt = document.getElementById("vernodo").value;
        var newURL = "http://moica2.telecentro.net.ar/buscarTicket.php?nodo=" + inpt;
        chrome.tabs.create({ url: newURL });
    });*/
});



document.getElementById("vertkt")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("buscarTkt").click();
    }
});
