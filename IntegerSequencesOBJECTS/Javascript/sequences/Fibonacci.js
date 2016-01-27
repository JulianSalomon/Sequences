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