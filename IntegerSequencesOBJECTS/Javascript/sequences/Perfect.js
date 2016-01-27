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