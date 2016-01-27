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