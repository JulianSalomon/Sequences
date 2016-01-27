var sketch3=function(p) {

    var enesimo = 1;


    function isEven(n) {
        if (n % 2 == 0) return true;
        return false;
    }
    p.isEven = isEven;

    function proc(n) {
        if (isEven(n)) return p.floor(p.sqrt(n));
        return p.floor(p.sqrt(n) * p.sqrt(n) * p.sqrt(n));
    }
    p.proc = proc;

    function tamArr(n) {
        var a = 0;
        for (a = 0; n > 1; a++)
            n = proc(n);
        return a + 1;
    }
    p.tamArr = tamArr;

    function juggler(n) {
        var tam = tamArr(n);
        var jugg = new Array(tam);
        jugg[0] = n;
        for (var i = 0; i + 1 < tam; i++) {
            jugg[i + 1] = proc(n);
            n = jugg[i + 1];
        }
        return jugg;
    }
    p.juggler = juggler;

    function diam() {
        if (p.width > p.height) return p.height;
        return p.width;
    }
    p.diam = diam;

    function dibujoJuggler() {
        var tam = tamArr(enesimo);
        var arr=new Array(tam);
        arr = juggler(enesimo);
        var sum = 0;
        var start = 0,
            stop = 0,
            textX = 0,
            textY = 0;
        for (var i = 0; i < tam; i++) {
            sum += arr[i];
        }
        var rad = diam() / 2;
	if(tam==1){
	    p.ellipse(p.width / 2, p.height / 2, rad * 2, rad * 2);
	    p.text("1", p.width / 2, p.height / 2);
	} else {
	    for (var i = 0; i < tam; i++) {
		start = stop;
		stop += parseFloat(arr[i]) * p.TWO_PI / sum;
		p.arc(p.width / 2, p.height / 2, rad * 2, rad * 2, start, stop, "pie");
		textX = 3 * rad / 4 * (p.cos((stop - start) / 2 + start));
		textY = 3 * rad / 4 * (p.sin((stop - start) / 2 + start));
		p.text(arr[i], p.width / 2 + textX, p.height / 2 + textY);
	    }
	}
    }
    p.dibujoJuggler = dibujoJuggler;

    function setup() {
        p.createCanvas(600, 600);
        p.noFill(0);
        p.smooth();
        p.background(0);
        p.stroke(255);
	p.textSize(30);
    }
    p.setup = setup;

    var serie = 0;

    function draw() {
        dibujoJuggler();
    }
    p.draw = draw;

    function mouseReleased() {
        if (p.mouseButton == p.LEFT) {
            enesimo++;
            p.background(0);
        }
        if (p.mouseButton == p.RIGHT && enesimo>1) {
            enesimo--;
            p.background(0);
        }
    }
    p.mouseReleased = mouseReleased;
}

var myp5_3 = new p5(sketch3, 'Juggler_id');
