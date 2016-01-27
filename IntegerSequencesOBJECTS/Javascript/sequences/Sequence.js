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