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