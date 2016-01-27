
var sequence, simulatedInheritance, NJ;
var n=1, serie=0, mode=0, counter=0, present=true;  

function setup(){
  var myCanvas=createCanvas(windowWidth-100, windowHeight-100);
  myCanvas.parent('Sketch_id');
  sequence = new Fibonacci();
  simulatedInheritance = new Sequence();
  NJ = new NeilJames();
  colorMode(HSB);
  textAlign(LEFT);
  textSize(12);
  background(0,0,50);
}

function draw(){
	background(0,0,50);
	if(present)
		presentation();
	else {
		textFont("Arial");
		switch(mode){
			case 0:
				sequence.display(n);
			break;
			case 1:
				sequence.barChart(n);
			break;
			case 2:
				sequence.lineChart(n);
			break;
			case 3:
				sequence.curveFitting(n);
			break;
		}
	}
}

function keyTyped(){
  switch(key){
  	case '+':
	  	n++;
	  break;
	  case '-':
	    if(n > 1)
	    	n--;
  	break;
  	case ' ':
  		present=false;
  	break;
  	case '>':
  		serie=(serie+1)%6;
  		present=true;
  		sequenceChoose();
  	break;
  	case '<':
  		if(serie==0)
  			serie=5;
  		else
  			serie=(serie-1);
  		present=true;
  		sequenceChoose();
  	break;
  	case '.':
    	mode= (mode+1) % 4;
    break;
  	case ',':
    	if(mode==0)
      	mode=3;
    	else
      	mode--;
    break;
  }
}

function sequenceChoose(){
	switch(serie){
		case 0:
			sequence=new Fibonacci();
			return 'Fibonacci';
		break;
		case 1:
			sequence=new Golomb();
			return 'Golomb';
		break;
		case 2:
			sequence=new Juggler();
			return 'Juggler';
		break;
		case 3:
			sequence=new Deficient();
			return 'Deficient';
		break;
		case 4:
			sequence=new Abundant();
			return 'Abundant';
		break;
		case 5:
			sequence=new Perfect();
			return 'Perfect';
		break;
	}
}

function modeChoosed(){
	switch(mode){
		case 0:
			return 'Imagination!'
		break;
		case 1:
			return 'Bar chart';
		break;
		case 2:
			return 'Line chart';
		break;
		case 3:
			return 'Curve fitting';
		break;
	}
}

function presentation(){
	fill(0);
	stroke(0,0,100).strokeWeight(2);
	textSize(80).textAlign(CENTER).textFont("Georgia").text(sequenceChoose(),width/2, height/5);
	textSize(40).textAlign(CENTER).textFont("Georgia").noStroke().text("Representation: "+modeChoosed(),width/2, height/3);
	textSize(30).textAlign(LEFT).textLeading(50).text(sequence.description()+"\n\n"+sequence.author(), width/14, height/2);
	textSize(25).textAlign(CENTER).text("< & > change \n sequence", width/8,7*height/8);
	textSize(25).textAlign(CENTER).text(", & . change graphic \n representation", 7*width/8,7*height/8);
	textSize(25).textAlign(CENTER).text("- & + decrease or aument nth number",width/2,13*height/16);
	textSize(40).textAlign(CENTER).strokeWeight(0.8).stroke(0,0,100).text("Space to continue",width/2,15*height/16);
	strokeWeight(1);
}

function Sequence(){}

Sequence.prototype.drawTable = function(valCompute, lineV, lineH){
  rect(width/8, height/8, 6*width/8, 6*height/8);
  textSize(15);
  textAlign(RIGHT);
  for(var i=0; i<=valCompute; i++){
    text(valCompute-i, width/8, map(i,0,valCompute, height/8, 7*height/8));
    if(lineH)
      line(width/8, map(i,0,valCompute, height/8, 7*height/8), 7*width/8, map(i,0,valCompute, height/8, 7*height/8));
  }
  textAlign(CENTER);
  for(var i=0; i<=n; i++){
    text(i, map(i, 0, n, width/8, 7*width/8), 7*height/8+15);
    if(lineV)
      line(map(i, 0, n, width/8, 7*width/8), height/8, map(i, 0, n, width/8, 7*width/8), 7*height/8);
  }
}

Sequence.prototype.maxValue = function(i){
  var number=0;
  for(var j=1; j<=n; j++){
    if(number<sequence.compute(j))
      number=sequence.compute(j);
    }
  return number;
}

Sequence.prototype.barChart = function(n){
	var valCompute=this.maxValue(n);
  strokeWeight(0.1);
  this.drawTable(valCompute, false, true);
  strokeCap(SQUARE);
  strokeWeight(10);
  stroke(0, 100, 100);
  for(var i=1; i<=n; i++){
    x=map(i, 0, n, width/8, 7*width/8);
    y=map(sequence.compute(i), 0, valCompute, height/8, 7*height/8);
    line(x, 7*height/8, x, height-y);
  }
  strokeWeight(1);
  stroke(255);
  strokeCap(ROUND);
}

Sequence.prototype.lineChart = function(n){
  var valCompute=this.maxValue(n);
  x=map(1, 0, n, width/8, 7*width/8);
  y=map(sequence.compute(1), 0, valCompute, height/8, 7*height/8);
  var xBak=x , yBak=y;
  strokeWeight(0.1);
  this.drawTable(valCompute, true, true);
  stroke(0, 100, 100);
  for(var i=1; i<=n; i++){
    x=map(i, 0, n, width/8, 7*width/8);
    y=map(sequence.compute(i), 0, valCompute, height/8, 7*height/8);
    strokeWeight(5);
    point(x, height-y);
    strokeWeight(3);
    line(xBak, height-yBak, x, height-y);
    xBak=x;
    yBak=y;
  }
  strokeWeight(1);
  stroke(255);
}

Sequence.prototype.curveFitting = function(n) {
  var valCompute=this.maxValue(n);
  strokeWeight(0.1);
  this.drawTable(valCompute, false, true);
  strokeCap(SQUARE);
  strokeWeight(3);
  stroke(0, 100, 100);
  beginShape();
  for(var i=0; i<=n+1; i++){
    x=map(i, 0, n, width/8, 7*width/8);
    y=map(sequence.compute(i), 0, valCompute, height/8, 7*height/8);
    curveVertex(x,height-y);
  }
  endShape();
  strokeWeight(1);
  stroke(255);
  strokeCap(ROUND);
}

function Fibonacci(){
	this.x;
	this.y;
}

Fibonacci.prototype.author = function(){
	return "Leonardo Bonacci";
}

Fibonacci.prototype.description = function(){
  return "Fibonacci sequence returns 1 for first two and the sum of last two numbers.";
}
  
Fibonacci.prototype.compute = function(i){
  if(i==1 || i==2)
    return 1;
  if(i>1)
    return this.compute(i-1)+this.compute(i-2);
  return -1;
}

Fibonacci.prototype.detWid = function(){
  if(n%2==0)
    return this.compute(n)+this.compute(n-1);
  return this.compute(n);
}
  
Fibonacci.prototype.detHei = function(){
  if(n%2==0)
    return this.compute(n);
  return this.compute(n+1);
}

Fibonacci.prototype.remapW = function(x){
  return map(x,0,this.detWid(),0,width);
}
  
Fibonacci.prototype.remapH = function(y){
  return map(y,0,this.detHei(),0,height);
}

Fibonacci.prototype.display = function(n){
	for(var i=1; i<=n; i++){
		stroke(0,100,0);
	  var nH=this.remapH(this.compute(i)*2), nW=this.remapW(this.compute(i)*2);
	  switch(counter){
		  case 0:
	      if(i==1){
		      this.x=this.remapW(this.detWid()-this.sum(i+1));
		      this.y=this.remapH(this.detHei()-this.sum(i));
	      	arc(this.x,this.y,nW,nH,HALF_PI,PI);
	      }
	      if(i==2){
	        arc(this.x,this.y,nW,nH,0,HALF_PI);
	        counter=3;
	      }
	    break;
	    case 1:
	      this.x=this.x+this.remapW(this.compute(i-2));
	      arc(this.x,this.y,nW,nH,HALF_PI,PI);
	      counter++;
	    break;
	    case 2:
	      this.y=this.y-this.remapH(this.compute(i-2));
	      arc(this.x,this.y,nW,nH,0,HALF_PI);
	      counter++;
	    break;
	    case 3:
	      this.x=this.x-this.remapW(this.compute(i-2));
	      arc(this.x,this.y,nW,nH,PI+HALF_PI,TWO_PI);
	      counter++;
	    break;
	    case 4:
	      this.y=this.y+this.remapH(this.compute(i-2));
	      arc(this.x,this.y,nW,nH,PI,PI+HALF_PI);
	      counter=1;
	    break;
	  }
		this.dibujoRect(i, nW, nH);
	  stroke(0,100,0);
	}
	counter=0;
}

Fibonacci.prototype.sum = function(i){
  var resultado=0;
  for(var j=0;(i+j*4)<=n;j++)
    resultado+=this.compute(i+j*4);
  return resultado;
}
  
Fibonacci.prototype.dibujoRect = function(i, nW, nH){
  stroke(0,100,0);
  var a=this.compute(i);
  textSize(map(a,0,this.compute(n),5,50));
  switch(i%4){
    case 1:
      rect(this.x-nW/2,this.y,nW/2,nH/2);
      fill(255);
      text(a,this.x-nW/2+nW/4,this.y+nH/4);
    break;
    case 2:
      rect(this.x,this.y,nW/2,nH/2);
      fill(255);
      text(a,this.x+nW/5,this.y+nH/4);
    break;
    case 3:
      rect(this.x,this.y-nH/2,nW/2,nH/2);
      fill(255);
      text(a,this.x+nW/5,this.y-nH/2+nH/4);
    break;
    case 0:
      rect(this.x-nW/2,this.y-nH/2,nW/2,nH/2);
      fill(255);
      text(a,this.x-nW/2+nW/4,this.y-nH/2+nH/4);
    break;
  }
  noFill();
  stroke(0,100,0);
}

Fibonacci.prototype.barChart = function(n){
	simulatedInheritance.barChart(n);
}

Fibonacci.prototype.lineChart = function(n){
	simulatedInheritance.lineChart(n);
}

Fibonacci.prototype.curveFitting = function(n){
	simulatedInheritance.curveFitting(n);
}

function Golomb(){}

Golomb.prototype.author = function(){
  return "Solomon Wolf Golomb";
}

Golomb.prototype.description = function(){
  return "a(n) is the number of times that n occurs in the sequence, starting with a(1)=1";
}
  
Golomb.prototype.compute = function(i){
  if(i==1)
    return 1;
  if(i>1)
    return 1+this.compute(i-this.compute(this.compute(i-1)));
  return -1;
}

Golomb.prototype.remapW = function(x){
  return map(x,0,this.compute(n),0,width);
}

Golomb.prototype.display = function(n){
   textAlign(RIGHT).textSize(50);
   var nAct=1;
   var div;
   var sizeWidth;
   for(var i=0; i<=this.compute(n); i++){
     x=this.remapW(i);
     sizeWidth=width/this.compute(n);
     rect(x, 0, sizeWidth, height-1);
     
     while(this.compute(nAct+1)==i && nAct+1<=n)
       nAct++;
       div=this.contarDivisiones(nAct);
       for(var j=0; j<div; j++){
         rect(this.remapW(i-1), j*height/div, width/this.compute(n), height/div);
         text(this.compute(nAct),this.remapW(i-1)+width/(8*this.compute(n))+70,j*height/div+height/(2*div));
       }
     while(this.compute(nAct)==i)
       nAct++;
    }
  }
  
Golomb.prototype.contarDivisiones = function(i){                    //Divisiones verticales
    var divisiones=1;
    while(this.compute(i)==this.compute(i-1) && i<=n){
      divisiones++;
      i--;
    }
    return divisiones;
}

Golomb.prototype.barChart = function(n){
	simulatedInheritance.barChart(n);
}

Golomb.prototype.lineChart = function(n){
	simulatedInheritance.lineChart(n);
}

Golomb.prototype.curveFitting = function(n){
	simulatedInheritance.curveFitting(n);
}

function Juggler(){}

Juggler.prototype.author = function(){
	return "Clifford Alan Pickover";
}

Juggler.prototype.description = function(){
  return "Starts with a positive integer a(0) and each subsequent term is defined by the relation: a(k+1)=floor(a(k)^(1/2)) \n if a(k) is even, else a(k+1)=floor(a(k)^(3/2))";
}

Juggler.prototype.isEven = function(i){
  if(i%2==0)
    return true;
  return false;
}

Juggler.prototype.proc = function(i){
  if(this.isEven(i))
    return floor(sqrt(i));
  return floor(sqrt(i)*sqrt(i)*sqrt(i));
}

Juggler.prototype.tamArr = function(i){
  for(var a=0; i>1; a++)
    i=this.proc(i);
  return a+1;
}
  
Juggler.prototype.compute = function(i){
  var tam=this.tamArr(i), number=0;
  var a = new Array(tam);
  a=this.juggler(i);
  for(var j=0; j<tam; j++)
    if(a[j]>number)
      number=a[j];
  return number;
}

Juggler.prototype.juggler = function(i){
	var tam=this.tamArr(i);
  jugg = new Array(tam);
  jugg[0]=i;
  for(var j=0; j+1<tam; j++) {
    jugg[j+1]=this.proc(i);
    i=jugg[j+1];
  }
  return jugg;
}

Juggler.prototype.diam = function(){
	if(width>height)
	  return height;
  return width;
}

Juggler.prototype.display = function(n){
	textSize(25);
  var tam=this.tamArr(n);
  arr=new Array(tam);
  arr=this.juggler(n);
  var sum=0, start=0, stop=0, textX=0, textY=0;
  for(var i=0;i<tam;i++){
    sum+=arr[i];
    sum=int(sum);
  }
  var rad=this.diam()/2;
  if(tam===1){
	  ellipse(width/2, height/2, rad*2, rad*2)
	  text(arr[0], width/2, height/2);
  } else {
	  for(var i=0;i<tam;i++){
	  	start=stop;
	    stop+=float(arr[i])*TWO_PI/sum;
	    arc(width/2,height/2,rad*2, rad*2, start, stop, PIE);
	    textX=3*rad/4*(cos((stop-start)/2+start));
	    textY=3*rad/4*(sin((stop-start)/2+start));
	    text(arr[i], width/2+textX , height/2+textY);
	  }
  }
}

Juggler.prototype.barChart = function(n){
	simulatedInheritance.barChart(n);
}

Juggler.prototype.lineChart = function(n){
	simulatedInheritance.lineChart(n);
}

Juggler.prototype.curveFitting = function(n){
	simulatedInheritance.curveFitting(n);
}

function NeilJames (){}
  
NeilJames.prototype.author = function(){
  return "Neil James Alexander Sloane";
}

NeilJames.prototype.display = function(i){
  var counter=1, rects=ceil(sqrt(i));
  var rectWidth=7*width/(8*rects), rectHeight=7*height/(8*rects);
  textAlign(LEFT).textSize(15);
  for(var j=0; j<rects && counter<=i; j++){
    for(var k=0; k<rects && counter<=i; k++){
  	  if(sequence.isNeilJames(counter)){
    	  fill(0, 50, 0);
      } else {
      	fill(0, 100, 50);
      }
      rect(k*rectWidth+width/16, j*rectHeight+height/16 , rectWidth, rectHeight);
      fill(0, 0, 100);
      text(counter, k*rectWidth+width/16, j*rectHeight+height/16+15);
    	counter++;
  	}
  }
  noFill();
	stroke(255);
}
   
NeilJames.prototype.divisors = function(i){                                
  div = new Array();
  append(div, -1);
  for(var j=1; j<=i; j++){
    if(i%j==0){
      append(div,j);
    }else{
      append(div,0);
    }
  }
  return div;
}
    
NeilJames.prototype.sigmaDivisors= function(i){                                 
  divisors = this.divisors(i);
  var sigma=0;
  for(var j=1; j<i; j++){
    sigma+=divisors[j];
  }
  return sigma;
}  

function Abundant(){}

Abundant.prototype.author = function(){
	return NJ.author();
}

Abundant.prototype.description = function(){
  return "A number n is abundant if the sum of divisors is greather than n.";
}
  
Abundant.prototype.compute = function(i){
  if(i<=0)
    return -1;
  return this.abundant(i);
}

Abundant.prototype.isNeilJames = function(i){
  if(NJ.sigmaDivisors(i)>i)
    return true;
  return false;
}
  
Abundant.prototype.abundant = function(i){
	var j=1;
  for(var numberOfAbundants=0; numberOfAbundants<i; j++){
    if(this.isNeilJames(j)){
      numberOfAbundants++;
    }
  }
  return j-1;
}

Abundant.prototype.display = function(n){
	noStroke().textFont("Arial").fill(0, 0, 0);
  rect(width/2-50, height-20, 10, 10);
  text("Abundant", width/2-35, height-10);
  fill(0,100,50)
  rect(width/2+50, height-20, 10, 10);
  fill(0,0,0);
  text("Non abundant", width/2+65, height-10);
  stroke(0, 0, 50).strokeWeight(2);
	NJ.display(n);
}

Abundant.prototype.barChart = function(n){
	simulatedInheritance.barChart(n);
}

Abundant.prototype.lineChart = function(n){
	simulatedInheritance.lineChart(n);
}

Abundant.prototype.curveFitting = function(n){
	simulatedInheritance.curveFitting(n);
}

function Deficient(){}

Deficient.prototype.author = function(){
	return NJ.author();
}

Deficient.prototype.description = function(){
  return "A number n is deficient if the sum of divisors is less than n.";
}
  
Deficient.prototype.compute = function(i){
  if(i<6 && i>0)
    return i;
  if(i<=0)
    return -1;
  return this.sigma(this.deficients(i));
}

Deficient.prototype.isNeilJames = function(i){
  if(NJ.sigmaDivisors(i)<i)
    return true;
  return false;
}
  
Deficient.prototype.sigma = function(defi){
	var sum=0;
  for(var j=0; j<defi.length; j++)
    sum+=defi[j];
  return sum;
}  
  
Deficient.prototype.deficients = function(i){
	var defi = new Array();
  append(defi, 0);
  append(defi, 1);
  for(var j=2; j<=i; j++){
    if(this.isNeilJames(this.sigma(defi)+1)){
      append(defi,1);
    } else {
      append(defi,2);
    }
  }
  return defi;
}

Deficient.prototype.display = function(n){
	noStroke().textFont("Arial").fill(0, 0, 0);
  rect(width/2-50, height-20, 10, 10);
  text("Deficient", width/2-35, height-10);
  fill(0,100,50)
  rect(width/2+50, height-20, 10, 10);
  fill(0,0,0);
  text("Non deficient", width/2+65, height-10);
  stroke(0, 0, 50).strokeWeight(2);
	NJ.display(n);
}

Deficient.prototype.barChart = function(n){
	simulatedInheritance.barChart(n);
}

Deficient.prototype.lineChart = function(n){
	simulatedInheritance.lineChart(n);
}

Deficient.prototype.curveFitting = function(n){
	simulatedInheritance.curveFitting(n);
}

function Perfect(){}

Perfect.prototype.author = function(){
	return NJ.author();
}

Perfect.prototype.description = function(){
  return "A number n is perfect if the sum of divisors is equal to n.";
}
  
Perfect.prototype.compute = function(i){
  if(i<=0)
    return -1;
  return this.perfect(i);
}

Perfect.prototype.isNeilJames = function(i){
  if(NJ.sigmaDivisors(i)===i)
    return true;
  return false;
}
  
Perfect.prototype.perfect = function(i){
	var j=1;
  for(var numberOfPerfects=0; numberOfPerfects<i; j++){
    if(this.isNeilJames(j)){
      numberOfPerfects++;
    }
  }
  return j-1;
}

Perfect.prototype.display = function(n){
	noStroke().textFont("Arial").fill(0, 0, 0);
  rect(width/2-50, height-20, 10, 10);
  text("Perfect", width/2-35, height-10);
  fill(0,100,50)
  rect(width/2+50, height-20, 10, 10);
  fill(0,0,0);
  text("Non perfect", width/2+65, height-10);
  stroke(0, 0, 50).strokeWeight(2);
	NJ.display(n);
}

Perfect.prototype.barChart = function(n){
	simulatedInheritance.barChart(n);
}

Perfect.prototype.lineChart = function(n){
	simulatedInheritance.lineChart(n);
}

Perfect.prototype.curveFitting = function(n){
	simulatedInheritance.curveFitting(n);
}

