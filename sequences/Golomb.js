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