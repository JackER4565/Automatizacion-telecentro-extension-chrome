

window.addEventListener('DOMContentLoaded', function() {
    // your button here
    var link = document.getElementById('vertktbutt');
    var link2 = document.getElementById('buscarTkt');
    var link3 = document.getElementById('CrearTkt');
    // onClick's logic below:
    link.addEventListener('click', function() {
      var inpt = document.getElementById("vertkt").value;
        var newURL = "https://moica2.telecentro.net.ar/verTicket.php?ticket=" + inpt;
        chrome.tabs.create({ url: newURL });
    });
        link2.addEventListener('click', function() {
          var inpt = document.getElementById("vertkt").value;
        var newURL = "https://moica2.telecentro.net.ar/buscarTicket.php?ticket=" + inpt;
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

var canvas = document.getElementById( 'canvas' ),
		ctx = canvas.getContext( '2d' ),
    canvas2 = document.getElementById( 'canvas2' ),
    ctx2 = canvas2.getContext( '2d' ),
		// full screen dimensions
		cw = 250,
		ch = 139,
    charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    maxCharCount = 40,
    fallingCharArr = [],
    fontSize = 6,
    maxColums = cw/(fontSize);
    canvas.width = canvas2.width = cw;
    canvas.height = canvas2.height = ch;
    console.log(cw);
    console.log(ch);

    function randomInt( min, max ) {
    	return Math.floor(Math.random() * ( max - min ) + min);
    }

    function randomFloat( min, max ) {
    	return Math.random() * ( max - min ) + min;
    }

    function Point(x,y)
    {
      this.x = x;
      this.y = y;
    }

    Point.prototype.draw = function(ctx){

      this.value = charArr[randomInt(0,charArr.length-1)].toUpperCase();
      this.speed = randomFloat(1,5);


      ctx2.fillStyle = "rgba(255,255,255,0.8)";
      ctx2.font = fontSize+"px san-serif";
      ctx2.fillText(this.value,this.x,this.y);

        ctx.fillStyle = "#0F0";
        ctx.font = fontSize+"px san-serif";
        ctx.fillText(this.value,this.x,this.y);



        this.y += this.speed;
        if(this.y > ch)
        {
          this.y = randomFloat(-100,0);
          this.speed = randomFloat(2,5);
        }
    }

    for(var i = 0; i < maxColums ; i++) {
      fallingCharArr.push(new Point(i*fontSize,randomFloat(-500,0)));
    }


    var update = function()
    {

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,cw,ch);

    ctx2.clearRect(0,0,cw,ch);

      var i = fallingCharArr.length;

      while (i--) {
        fallingCharArr[i].draw(ctx);
        var v = fallingCharArr[i];
      }

      requestAnimationFrame(update);
    }

  update();