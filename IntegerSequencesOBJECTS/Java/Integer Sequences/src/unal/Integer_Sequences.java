package unal;

import processing.core.*;

import java.util.ArrayList;
import java.util.Arrays; 

public class Integer_Sequences extends PApplet {

	abstract class Sequence {
	  float x, y;
	  
	  /**
	   * The sequence author
	   */
	  public abstract String author();
	  
	  /**
	   * The sequence description
	   */
	  public abstract String description();
	  
	  /**
	   * Computes the nth sequence term
	   */
	  public abstract int compute(int n);
	  
	  /**
	   * Returns the first n seq terms as an array.
	   */
	  public int [] toArray(int n) {
	    int[] seq = new int[n];
	    for (int i=0; i<n; i++)
	      seq[i] = compute(i+1);
	    return seq;
	  }
	  
	  /**
	   * Returns the first n seq terms as a string.
	   * Sequence may then simply be printed as: println(sequence.toString(n))
	   */
	  public String toString(int n) {
	    return Arrays.toString(toArray(n));
	  }
	  
	  public void printFirstN(int n, String a) {
	    println("First " + n + " terms of sequence " + a + " are: " + toString(n));
	  }
	  
	  // All display functions must scale the canvas properly
	  
	  /**
	   * Display n seq terms as you wish
	   */
	  public abstract void display(int n);
	   
	 /**
	  * Display a table for graphs
	  */
	  
	  public void drawTable(int valCompute, boolean lineV, boolean lineH){
	    rect(width/8, height/8, 6*width/8, 6*height/8);
	    textSize(15);
	    textAlign(RIGHT);
	    for(int i=0; i<=valCompute; i++){
	      text(valCompute-i, width/8, map(i,0,valCompute, height/8, 7*height/8));
	      if(lineH){
	        line(width/8, map(i,0,valCompute, height/8, 7*height/8), 7*width/8, map(i,0,valCompute, height/8, 7*height/8));
	      }
	    }
	    textAlign(CENTER);
	    for(int i=0; i<=n; i++){
	      text(i, map(i, 0, n, width/8, 7*width/8), 7*height/8+15);
	      if(lineV){
	        line(map(i, 0, n, width/8, 7*width/8), height/8, map(i, 0, n, width/8, 7*width/8), 7*height/8);
	      }
	    }
	  } 
	  
	  public int maxValue(int i){
	    int number=0;
	    for(int j=1; j<=n; j++){
	      if(number<compute(j))
	        number=compute(j);
	    }
	    return number;
	  }
	  
	  /**
	   * Display n seq terms as a bar chart: https://en.wikipedia.org/wiki/Bar_chart
	   * Warning: Should be implemented here in the super class!
	   */
	  public void barChart(int n) {
	    //TODO misssing implementation
	    int valCompute=maxValue(n);
	    
	    strokeWeight(0.1f);
	    drawTable(valCompute, false, true);
	    
	    strokeCap(SQUARE);
	    strokeWeight(10);
	    stroke(0, 100, 100);
	    for(int i=1; i<=n; i++){
	      x=map(i, 0, n, width/8, 7*width/8);
	      y=map(compute(i), 0, valCompute, height/8, 7*height/8);
	      line(x, 7*height/8, x, height-y);
	    }
	    strokeWeight(1);
	    stroke(255);
	    strokeCap(ROUND);
	  }
	  
	  /**
	   * Display n seq terms as a line chart: https://en.wikipedia.org/wiki/Line_chart
	   * Warning: Should be implemented here in the super class!
	   */
	   
	  public void lineChart(int n) {
	    //TODO misssing implementation
	    int valCompute=maxValue(n);
	    x=map(1, 0, n, width/8, 7*width/8);
	    y=map(compute(1), 0, valCompute, height/8, 7*height/8);
	    float xBak=x , yBak=y;

	    strokeWeight(0.1f);
	    drawTable(valCompute, true, true);
	    
	    stroke(0, 100, 100);
	    for(int i=1; i<=n; i++){
	      x=map(i, 0, n, width/8, 7*width/8);
	      y=map(compute(i), 0, valCompute, height/8, 7*height/8);
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
	  
	  /**
	   * Display n seq terms as a curve firring: https://en.wikipedia.org/wiki/Curve_fitting
	   * Hint: refer to the section 'Curves' here: https://processing.org/reference/
	   * Warning: Should be implemented here in the super class!
	   */
	  public void curveFitting(int n) {
	    //TODO misssing implementation
	    int valCompute=maxValue(n);
	    
	    strokeWeight(0.1f);
	    drawTable(valCompute, false, true);
	    
	    strokeCap(SQUARE);
	    strokeWeight(3);
	    stroke(0, 100, 100);
	    beginShape();
	    for(int i=0; i<=n+1; i++){
	      x=map(i, 0, n, width/8, 7*width/8);
	      y=map(compute(i), 0, valCompute, height/8, 7*height/8);
	      curveVertex(x,height-y);
	    }
	    endShape();
	    strokeWeight(1);
	    stroke(255);
	    strokeCap(ROUND);
	  }
	    
	  public float detWid(){                                    //Funci\u00f3n que determina el Ancho para fibonacci
	    if(n%2==0)
	      return compute(n)+compute(n-1);
	    return compute(n);
	  }
	  
	  public float detHei(){                                    //Funci\u00f3n que determina el Alto fibo
	    if(n%2==0)
	      return compute(n);
	    return compute(n+1);
	  }
	  
	  public float remapW(float x){                             //Mapeo de coordenadas en width-1 para ver cuadr\u00edculas correctamente
	    switch(serie){
	      case 0:
	        return map(x,0,detWid(),0,width);          //Para fibonacci
	      case 1:
	        return map(x,0,compute(n),0,width);        //Para Golomb
	    }
	    return 0;
	  }
	  
	  public float remapH(float y){                             //Mapeo de coordenadas en height-1 ... fibonacci
	    return map(y,0,detHei(),0,height);
	  }
	}
	
	class Fibonacci extends Sequence{  
		  public String author(){
		    return "Leonardo Bonacci";
		  }
		  
		  public String description(){
		    return "Fibonacci sequence returns 1 for first two and the sum of last two numbers.";
		  }
		  
		  public int compute(int i){
		    if(i==1 || i==2)
		      return 1;                                      //a(1)=1, a(2)=2
		    if(i>1)
		      return compute(i-1)+compute(i-2);              //a(n)=a(n-1)+a(n-2)
		    return -1;                                       //Casos indefinidos
		  } 
		  
		  
		  public void display(int i){
		      float nH=remapH(compute(i)*2), nW=remapW(compute(i)*2);
		      switch(counter){
		        case 0:                                          //Primera coordenada tomada como referencia
		          if(i==1){
		            x=remapW(detWid()-sum(i+1));
		            y=remapH(detHei()-sum(i));
		            arc(x,y,nW,nH,HALF_PI,PI);
		          }
		          if(i==2){
		            arc(x,y,nW,nH,0,HALF_PI);
		            counter=3;
		          }
		        break;
		        case 1:                                          //Condicion para todos los arcos que son desde PI/2 hasta PI
		          x=x+remapW(compute(i-2));
		          arc(x,y,nW,nH,HALF_PI,PI);
		          counter++;
		        break;
		        case 2:                                          //Condicion para todos los arcos que son desde 0 hasta PI/2
		          y=y-remapH(compute(i-2));
		          arc(x,y,nW,nH,0,HALF_PI);
		          counter++;
		        break;
		        case 3:                                          //Condicion para todos los arcos que son desde 3PI/2 hasta 2PI
		          x=x-remapW(compute(i-2));
		          arc(x,y,nW,nH,PI+HALF_PI,TWO_PI);
		          counter++;
		        break;
		        case 4:                                          //Condicion para todos los arcos que son desde PI hasta 3PI/2
		          y=y+remapH(compute(i-2));
		          arc(x,y,nW,nH,PI,PI+HALF_PI);
		          counter=1;
		        break;
		      }
		    dibujoRect(i, nW, nH);
		    stroke(255);
		    
		  }
		  
		  public int sum(int i){                                    //Sumatoria modificada para hallar la primera coordenada x, y de Fibonacci
		    int resultado=0;
		    for(int j=0;(i+j*4)<=n;j++)
		      resultado+=compute(i+j*4);
		    return resultado;
		  }
		  
		  public void dibujoRect(int i, float nW, float nH){
		    stroke(0,100,100);
		    int a=compute(i);
		    textSize(map(a,0,compute(n),5,50));
		    switch(i%4){
		      case 1:
		        rect(x-nW/2,y,nW/2,nH/2);
		        fill(255);
		        text(a,x-nW/2+nW/4,y+nH/4);
		      break;
		      case 2:
		        rect(x,y,nW/2,nH/2);
		        fill(255);
		        text(a,x+nW/5,y+nH/4);
		      break;
		      case 3:
		        rect(x,y-nH/2,nW/2,nH/2);
		        fill(255);
		        text(a,x+nW/5,y-nH/2+nH/4);
		      break;
		      case 0:
		        rect(x-nW/2,y-nH/2,nW/2,nH/2);
		        fill(255);
		        text(a,x-nW/2+nW/4,y-nH/2+nH/4);
		      break;
		    }
		    noFill();
		    stroke(255);
		  }  
		  
		}
		
	class Golomb extends Sequence{

		  public String author(){
		    return "Solomon Wolf Golomb";
		  }
		  
		  public String description(){
		    return "a(n) is the number of times that n occurs in the sequence, starting with a(1)=1";
		  }
		  
		  public int compute(int i){                                //Implementaci\u00f3n funci\u00f3n Golomb
		    if(i==1)                                         //Definici\u00f3n de wikipedia: a(1)=1
		      return 1;
		    if(i>1)                                          //a(n+1)=1+a(n+1-a(a(n)))
		      return 1+compute(i-compute(compute(i-1)));     //a(n)=1+a(n-a(a(n-1)))
		    return 0;                                        //Casos indefinidos
		  }

		  public void display(int n){
		   textSize(50);
		   int nAct=1;
		   float div;
		   float sizeWidth;
		   for(int i=0; i<=compute(n); i++){
		     x=remapW(i);
		     sizeWidth=width/compute(n);
		     rect(x, 0, sizeWidth, height-1);
		     
		     while(compute(nAct+1)==i && nAct+1<=n)
		       nAct++;
		       div=contarDivisiones(nAct);
		       for(int j=0; j<div; j++){
		         rect(remapW(i-1), j*height/div, width/compute(n), height/div);
		         text(compute(nAct),remapW(i-1)+width/(8*compute(n)),j*height/div+height/(2*div));
		       }
		     while(compute(nAct)==i)
		       nAct++;
		    }
		  }
		  
		  public float contarDivisiones(int i){                    //Divisiones verticales
		    float divisiones=1;
		    while(compute(i)==compute(i-1) && i<=n){
		      divisiones++;
		      i--;
		    }
		    return divisiones;
		  }
		  
		}
		
	class Juggler extends Sequence{

		  public String author(){
		    return "Clifford Alan Pickover";
		  }
		  
		  public String description(){
		    return "Starts with a positive integer a(0) and each subsequent term is defined by the relation: a(k+1)=floor(a(k)^(1/2)) if a(k) is even, else a(k+1)=floor(a(k)^(3/2))";
		  }

		  public boolean isEven(int i) {
		    if(i%2==0)
		      return true;
		    return false;
		  }
		  
		  public int proc(int i) {
		    if(isEven(i))
		      return floor(sqrt(i));
		    return floor(sqrt(i)*sqrt(i)*sqrt(i));
		  }
		  
		  public int tamArr(int i) {
		    int a;
		    for(a=0; i>1; a++)
		      i=proc(i);
		    return a+1;
		  }
		  
		  public int compute(int i){
		    int tam=tamArr(i), number=0;
		    int a[]= new int[tam];
		    a=juggler(i);
		    for(int j=0; j<tam; j++){
		      if(a[j]>number)
		        number=a[j];
		    }
		    return number;
		  }
		  
		  public int[] juggler(int i){
		    int tam=tamArr(i);
		    int jugg[]= new int[tam];
		    jugg[0]=i;
		    for(int j=0; j+1<tam; j++) {
		      jugg[j+1]=proc(i);
		      i=jugg[j+1];
		    }
		    return jugg;
		  }
		  
		  public float diam(){
		    if(width>height)
		      return height;
		    return width;
		  }
		  
		  public void display(int n){
		    textSize(15);
		    int tam=tamArr(n);
		    int arr[]=new int[tam];
		    arr=juggler(n);
		    int sum=0;
		    float start=0, stop=0, textX=0, textY=0;
		    for(int i=0;i<tam;i++){
		      sum+=arr[i];
		    }
		    float rad=diam()/2;
		    for(int i=0;i<tam;i++){
		      start=stop;
		      stop+=PApplet.parseFloat(arr[i])*TWO_PI/sum;
		      arc(width/2,height/2,rad*2, rad*2, start, stop, PIE);
		      textX=3*rad/4*(cos((stop-start)/2+start));
		      textY=3*rad/4*(sin((stop-start)/2+start));
		      text(arr[i], width/2+textX , height/2+textY);
		    }
		  }
		}
			
	abstract class NeilJames extends Sequence{
		  
		  /**
		   * The sequences Abundant, Deficient and Perfect author
		   */
		  public String author(){
		    return "Neil James Alexander Sloane";
		  }
		  
		  /**
		   * Determine if is an Abundant, Deficient or Perfect number
		   */
		  public abstract boolean isNeilJames(int i);
		  
		  /**
		   * Computes the nth sequence term
		   */
		  public abstract int compute(int n);
		  /**
		   * Find divisors of i number
		   */
		   
		   public void display(int i){
		     int counter=1, rects=ceil(sqrt(i));
		     float rectWidth=7*width/(8*rects), rectHeight=7*height/(8*rects);
		     textSize(15);
		     for(int j=0; j<rects && counter<=i; j++){
		       for(int k=0; k<rects && counter<=i; k++){
		         if(isNeilJames(counter)){
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
		   
		   public ArrayList divisors(int i){                                
		    ArrayList<Integer> div = new ArrayList<Integer>();
		    div.add(0, -1);
		    for(int j=1; j<=i; j++){
		      if(i%j==0){
		        div.add(j,j);
		      }else{
		        div.add(j,0);
		      }
		    }
		    return div;
		  }
		    
		  /**
		   * Sum of divisors of i number
		   */
		  public int sigmaDivisors(int i){                                 
		    ArrayList<Integer> divisors = divisors(i);
		    int sigma=0;
		    for(int j=1; j<i; j++){
		      sigma+=divisors.get(j);
		    }
		    return sigma;
		  }  
		}

	class Perfect extends NeilJames{  
		  
		  public String description(){
		    return "A number n is perfect if the sum of divisors is equal to n.";
		  }
		  
		  public int compute(int i){
		    if(i<=0)
		      return -1;
		    return perfect(i);
		  }
		  
		  /**
		   * True if i is perfect
		   */
		  public boolean isNeilJames(int i){                                
		    if(sigmaDivisors(i)==i)
		        return true;
		    return false;
		  }
		  
		  /**
		   * Return i abundant number
		   */
		  public int perfect(int i){
		    int j=1;
		    for(int numberOfPerfects=0; numberOfPerfects<i; j++){
		      if(isNeilJames(j)){
		        numberOfPerfects++;
		      }
		    }
		    return j-1;
		  }
		}
		
	class Abundant extends NeilJames{  
		  
		  public String description(){
		    return "A number n is abundant if the sum of divisors is greather than n.";
		  }
		  
		  public int compute(int i){
		    if(i<=0)
		      return -1;
		    return abundant(i);
		  }
		   
		  /**
		   * True if i is abundant
		   */
		  public boolean isNeilJames(int i){                                
		    if(sigmaDivisors(i)>i)
		        return true;
		    return false;
		  }
		  
		  /**
		   * Return i abundant number
		   */
		  public int abundant(int i){
		    int j=1;
		    for(int numberOfAbundants=0; numberOfAbundants<i; j++){
		      if(isNeilJames(j)){
		        numberOfAbundants++;
		      }
		    }
		    return j-1;
		  }
		}
		
	class Deficient extends NeilJames{
		  
		  public String description(){
		    return "A number n is deficient if the sum of divisors is less than n.";
		  }
		  
		  public int compute(int i){
		    if(i<6 && i>0)
		      return i;
		    if(i<=0)
		      return -1;
		    return sigma(deficients(i));
		  }
		  
		  /**
		   * True if i is deficient
		   */
		  public boolean isNeilJames(int i){                                
		    if(sigmaDivisors(i)<i)
		        return true;
		    return false;
		  }
		  
		  /**
		   * Sum of an ArrayList
		   */
		  public int sigma(ArrayList<Integer> defi){
		    int sum=0;
		    for(int j=0; j<defi.size(); j++)
		      sum+=defi.get(j);
		    return sum;
		  }
		  
		  /**
		   * ArrayList for sigma and obtain i sequence number
		   */
		  public ArrayList deficients(int i){ 
		    ArrayList<Integer> defi = new ArrayList<Integer>();
		    defi.add(0, 0);
		    defi.add(1, 1);
		    for(int j=2; j<=i; j++){
		      if(isNeilJames(sigma(defi)+1)){
		        defi.add(j,1);
		      } else {
		        defi.add(j,2);
		      }
		    }
		    return defi;
		  }
		}
	
	// Objects declaration
	Fibonacci fiboSeq;
	Golomb goloSeq;
	Juggler juggSeq;
	Deficient defiSeq;
	Abundant abunSeq;
	Perfect perfSeq;
		
	int mode, n=1, serie, counter;
			
	static public void main(String[] Args) {
		PApplet.main(new String[] { "unal.Integer_Sequences" });
	}
	
	public void settings() {
		size(1400, 800);
		smooth();
	}
	
	@Override
	public void setup() {
	  
	  background(0);
	  colorMode(HSB, 360, 100, 100);
	  noFill();
	  
	  // Object init
	  fiboSeq = new Fibonacci();
	  goloSeq = new Golomb();
	  juggSeq = new Juggler();
	  defiSeq = new Deficient();
	  abunSeq = new Abundant();
	  perfSeq = new Perfect();
	}

	@Override
	public void draw() {
	  background(0);
	  dibujoSerie();
	}

	public void dibujoSerie() {
	  switch(serie) {
	    case 0:        
	      textSize(12);
	      textAlign(LEFT);
	      text("Fibonacci", 0, 11);
	      switch(mode) {
	      case 0:
	        for (int i=1; i<=n; i++) 
	        	fiboSeq.display(i);
	        counter=0;
	        break;
	      case 1:
	        fiboSeq.barChart(n);
	        break;
	      case 2:
	        fiboSeq.lineChart(n);
	        break;                                                        
	      case 3:
	        fiboSeq.curveFitting(n);
	        break;
	      }
	      break;
	    case 1:
	      textSize(12);
	      textAlign(LEFT);
	      text("Golomb", 0, 11);
	      switch(mode) {
	      case 0:
	        goloSeq.display(n);
	        break;
	      case 1:
	        goloSeq.barChart(n);
	        break;
	      case 2:
	        goloSeq.lineChart(n);
	        break;                                                        
	      case 3:
	        goloSeq.curveFitting(n);
	        break;
	      }
	      break;
	    case 2:
	      textSize(12);
	      textAlign(LEFT);
	      text("Juggler", 0, 11);
	      switch(mode) {
	      case 0:
	        juggSeq.display(n);
	        break;
	      case 1:
	        juggSeq.barChart(n);
	        break;
	      case 2:
	        juggSeq.lineChart(n);
	        break;                                                        
	      case 3:
	        juggSeq.curveFitting(n);
	        break;
	      }
	      break;
	      case 3:
	      textSize(12);
	      textAlign(LEFT);
	      text("Deficient", 0, 11);
	      switch(mode) {
	      case 0:
	        defiSeq.display(n);
	        break;
	      case 1:
	        defiSeq.barChart(n);
	        break;
	      case 2:
	        defiSeq.lineChart(n);
	        break;                                                        
	      case 3:
	        defiSeq.curveFitting(n);
	        break;
	      }
	      break;
	      case 4:
	      textSize(12);
	      textAlign(LEFT);
	      text("Abundant", 0, 11);
	      switch(mode) {
	      case 0:
	        abunSeq.display(n);
	        break;
	      case 1:
	        abunSeq.barChart(n);
	        break;
	      case 2:
	        abunSeq.lineChart(n);
	        break;                                                        
	      case 3:
	        abunSeq.curveFitting(n);
	        break;
	      }
	      break;
	      case 5:
	      textSize(12);
	      textAlign(LEFT);
	      text("Perfect", 0, 11);
	      switch(mode) {
	      case 0:
	        perfSeq.display(n);
	        break;
	      case 1:
	        perfSeq.barChart(n);
	        break;
	      case 2:
	        perfSeq.lineChart(n);
	        break;                                                        
	      case 3:
	        perfSeq.curveFitting(n);
	        break;
	      }
	      break;
	  }
	}

	public void keyPressed() {
	  // Object use:
	  switch(key) {
	  case '>':
	    serie=(serie+1) % 6;
	    break;
	  case '<':
	    if (serie==0) {
	      serie=5;
	    } else {
	      serie--;
	    }
	    break;
	  case '+':
	    n++;
	    /*println(n + " term Fibonacci value is: " + fiboSeq.compute(n));
	     println(n + " term Golomb value is: " + goloSeq.compute(n));
	     println(n + " term Juggler value is: " + Arrays.toString(juggSeq.juggler(n)));
	     println(n + " term Deficient value is: " + defiSeq.compute(n));
	     println(n + " term Abundant value is: " + abunSeq.compute(n));
	    println(n + " term Perfect value is: " + perfSeq.compute(n));*/
	    break;
	  case '-':
	    if (n>1) {
	      n--;
	      /*println(n + " term Fibonacci value is: " + fiboSeq.compute(n));
	       println(n + " term Golomb value is: " + goloSeq.compute(n));
	       println(n + " term Juggler value is: " + Arrays.toString(juggSeq.juggler(n)));
	       println(n + " term Deficient value is: " + defiSeq.compute(n));
	       println(n + " term Abundant value is: " + abunSeq.compute(n));
	       println(n + " term Perfect value is: " + perfSeq.compute(n));*/
	    }
	    break;
	  case 'p':
	    fiboSeq.printFirstN(n, "Fibonacci");
	    goloSeq.printFirstN(n, "Golomb");
	    juggSeq.printFirstN(n, "Juggler (max value of array)");
	    defiSeq.printFirstN(n, "Deficient");
	    abunSeq.printFirstN(n, "Abundant");
	    perfSeq.printFirstN(n, "Perfect");
	    break;
	  case '.':
	    mode= (mode+1) % 4;
	    break;
	  case ',':
	    if (mode==0) {
	      mode=3;
	    } else {
	      mode--;
	    }
	    break;
	  }
	}
}