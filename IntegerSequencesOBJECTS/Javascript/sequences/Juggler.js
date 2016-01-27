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