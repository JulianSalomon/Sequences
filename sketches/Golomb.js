var sketch2=function(p) {

    var enesimo = 1;
    var x = 0;
    var y = 0;

    function golomb(n) {
        if (n == 1) return 1;
        if (n > 1) return 1 + golomb(n - golomb(golomb(n - 1)));
        return 0;
    }
    p.golomb = golomb;

    function contarDivisiones(n) {
        var divisiones = 1;
        while (golomb(n) == golomb(n - 1) && n <= enesimo) {
            divisiones++;
            n--;
        }
        return divisiones;
    }
    p.contarDivisiones = contarDivisiones;

    function dibujoGolomb() {
        var nAct = 1;
        var div = 0;
        var sizeWidth = 0;
        for (var i = 0; i <= golomb(enesimo); i++) {
            x = remapW(i);
            sizeWidth = p.width / golomb(enesimo);
            p.rect(x, 0, sizeWidth, p.height - 1);
            while (golomb(nAct + 1) == i && nAct + 1 <= enesimo)
            nAct++;
            div = contarDivisiones(nAct);
            for (var j = 0; j < div; j++) {
                p.rect(remapW(i - 1), j * p.height / div, p.width / golomb(enesimo), p.height / div);
                p.text(golomb(nAct), remapW(i - 1) + p.width / (2 * golomb(enesimo)), j * p.height / div + p.height / (2 * div));
            }
            while (golomb(nAct) == i)
            nAct++;
        }
    }
    p.dibujoGolomb = dibujoGolomb;

    function remapW(x) {
        return p.map(x, 0, golomb(enesimo), 0, p.width - 1);
    }
    p.remapW = remapW;

    function setup() {
        p.createCanvas(400, 400);
        p.smooth();
        p.background(0);
        p.stroke(255);
        p.noFill();
    }
    p.setup = setup;

    function draw() {
        dibujoGolomb();
        count = 0;
    }
    p.draw = draw;

    function mouseReleased() {
        if (p.mouseButton == p.LEFT) {
            enesimo++;
            p.background(0);
        }
        if (p.mouseButton == p.RIGHT && enesimo>0) {
            enesimo--;
            p.background(0);
        }
    }
    p.mouseReleased = mouseReleased;
}

var myp5_2 = new p5(sketch2, 'Golomb_id');
