// Super abstract class Sequence
import java.util.Arrays;

abstract class Sequence {
  float x, y;
  
  /**
   * The sequence author
   */
  abstract String author();
  
  /**
   * The sequence description
   */
  abstract String description();
  
  /**
   * Computes the nth sequence term
   */
  abstract int compute(int n);
  
  /**
   * Returns the first n seq terms as an array.
   */
  int [] toArray(int n) {
    int[] seq = new int[n];
    for (int i=0; i<n; i++)
      seq[i] = compute(i+1);
    return seq;
  }
  
  /**
   * Returns the first n seq terms as a string.
   * Sequence may then simply be printed as: println(sequence.toString(n))
   */
  String toString(int n) {
    return Arrays.toString(toArray(n));
  }
  
  void printFirstN(int n, String a) {
    println("First " + n + " terms of sequence " + a + " are: " + toString(n));
  }
  
  // All display functions must scale the canvas properly
  
  /**
   * Display n seq terms as you wish
   */
  abstract void display(int n);
   
 /**
  * Display a table for graphs
  */
  
  void drawTable(int valCompute, boolean lineV, boolean lineH){
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
  
  int maxValue(int i){
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
  void barChart(int n) {
    //TODO misssing implementation
    int valCompute=maxValue(n);
    
    strokeWeight(0.1);
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
   
  void lineChart(int n) {
    //TODO misssing implementation
    int valCompute=maxValue(n);
    x=map(1, 0, n, width/8, 7*width/8);
    y=map(compute(1), 0, valCompute, height/8, 7*height/8);
    float xBak=x , yBak=y;

    strokeWeight(0.1);
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
  void curveFitting(int n) {
    //TODO misssing implementation
    int valCompute=maxValue(n);
    
    strokeWeight(0.1);
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
    
  float detWid(){                                    //Función que determina el Ancho para fibonacci
    if(n%2==0)
      return compute(n)+compute(n-1);
    return compute(n);
  }
  
  float detHei(){                                    //Función que determina el Alto fibo
    if(n%2==0)
      return compute(n);
    return compute(n+1);
  }
  
  float remapW(float x){                             //Mapeo de coordenadas en width-1 para ver cuadrículas correctamente
    switch(serie){
      case 0:
        return map(x,0,detWid(),0,width);          //Para fibonacci
      case 1:
        return map(x,0,compute(n),0,width);        //Para Golomb
    }
    return 0;
  }
  
  float remapH(float y){                             //Mapeo de coordenadas en height-1 ... fibonacci
    return map(y,0,detHei(),0,height);
  }
}