var sketch1=function(p) {

    var enesimo = 0;
    var x = 0;
    var y = 0;

    var count = 0;

    function fibo(n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        if (n > 1) return fibo(n - 1) + fibo(n - 2);
        return -1;
    }
    p.fibo=fibo;

    function sum(i) {
        var resultado = 0;
        for (var j = 0;
        (i + j * 4) <= enesimo; j++)
        resultado += fibo(i + j * 4);
        return resultado;
    }
	p.sum=sum;

    function dibujoRect(n, nW, nH) {
        p.stroke(150, 0, 0);
        var a = fibo(n);
        p.textSize(p.map(a, 0, fibo(enesimo), 0, 30));
        switch (n % 4) {
        case 1:
            p.rect(x - nW / 2, y, nW / 2, nH / 2);
            p.fill(255);
            p.text(a, x - nW / 2 + nW / 4, y + nH / 4);
            break;
        case 2:
            p.rect(x, y, nW / 2, nH / 2);
            p.fill(255);
            p.text(a, x + nW / 5, y + nH / 4);
            break;
        case 3:
            p.rect(x, y - nH / 2, nW / 2, nH / 2);
            p.fill(255);
            p.text(a, x + nW / 5, y - nH / 2 + nH / 4);
            break;
        case 0:
            p.rect(x - nW / 2, y - nH / 2, nW / 2, nH / 2);
            p.fill(255);
            p.text(a, x - nW / 2 + nW / 4, y - nH / 2 + nH / 4);
            break;
        }
        p.textSize(13);
	p.noFill();
    }
    p.dibujoRect=dibujoRect;

    function dibujoFibonacci(n){
        var nH = remapH(fibo(n) * 2),
            nW = remapW(fibo(n) * 2);
	p.stroke(255);
        p.noFill();
        switch (count) {
        case 0:
            if (n == 1) {
                x = remapW(detWid() - sum(n + 1));
                y = remapH(detHei() - sum(n));
                p.arc(x, y, nW, nH, p.HALF_PI, p.PI);
            }
            if (n == 2) {
                p.arc(x, y, nW, nH, 0, p.HALF_PI);
                count = 3;
            }
            break;
        case 1:
            x = x + remapW(fibo(n - 2));
            p.arc(x, y, nW, nH, p.HALF_PI, p.PI);
            count++;
            break;
        case 2:
            y = y - remapH(fibo(n - 2));
            p.arc(x, y, nW, nH, 0, p.HALF_PI);
            count++;
            break;
        case 3:
            x = x - remapW(fibo(n - 2));
            p.arc(x, y, nW, nH, p.PI + p.HALF_PI, p.TWO_PI);
            count++;
            break;
        case 4:
            y = y + remapH(fibo(n - 2));
            p.arc(x, y, nW, nH, p.PI, p.PI + p.HALF_PI);
            count = 1;
            break;
        }
        dibujoRect(n, nW, nH);
        p.stroke(255);
    }
    p.dibujoFibonacci=dibujoFibonacci;

    function detWid() {
        if (enesimo % 2 == 0) return fibo(enesimo) + fibo(enesimo - 1);
        return fibo(enesimo);
    }
    p.detWid=detWid;

    function detHei() {
        if (enesimo % 2 == 0) return fibo(enesimo);
        return fibo(enesimo) + fibo(enesimo - 1);
    }
    p.detHei=detHei;

    function remapW(x) {
        return p.map(x, 0, detWid(), 0, p.width - 1);
    }
    p.remapW=remapW;

    function remapH(y) {
        return p.map(y, 0, detHei(), 0, p.height - 1);
    }
    p.remapH=remapH;

    function setup() {
        p.createCanvas(700, 400);
	p.background(0);
	p.fill(0);
    }
    p.setup=setup;

    function draw() {
        p.background(0);
        p.stroke(255);
        for (var i = 1; i <= enesimo; i++)
            dibujoFibonacci(i);
        count = 0;
    }
    p.draw=draw;

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

var myp5_1 = new p5(sketch1, 'fibo_id'); 
