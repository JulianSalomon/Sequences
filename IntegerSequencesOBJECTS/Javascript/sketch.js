

var sequence, simulatedInheritance, NJ;
var n=1, serie=0, mode=0, counter=0, present=true;  

function setup(){
  createCanvas(1368, 768);
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