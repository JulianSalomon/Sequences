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