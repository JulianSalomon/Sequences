// Objects declaration
fibonacci fiboSeq;
golomb goloSeq;
juggler juggSeq;

int n=2, serie, mode, counter;   

void setup() {
  size(840,540);
  background(0);
  colorMode(HSB, 360, 100, 100);
  noFill();
  smooth();
  // Object init
  fiboSeq = new fibonacci();
  goloSeq = new golomb();
  juggSeq = new juggler();
}

void draw() {
  background(0);
  dibujoSerie();
}

void dibujoSerie() {
  switch(serie) {
    case 0:                                              //Implementación gráfico de serie Fibonacci
      switch(mode){
        case 0:
          for(int i=1; i<=n; i++) 
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
    case 1:                                              //Implementación gráfico de serie Golomb
      switch(mode){
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
    case 2:                                              //Implementación gráfico de serie Juggler
      switch(mode){
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
  }
}

void keyPressed() {
  // Object use:
  switch(key){
    case '>':
      serie=(serie+1) % 3;
    break;
    case '<':
      if(serie==0){
        serie=2;
      }else{
        serie--;
      }
    break;
    case '+':
      n++;
      println(n + " term Fibonacci value is: " + fiboSeq.compute(n));
      println(n + " term Golomb value is: " + goloSeq.compute(n));
      println(n + " term Juggler value is: " + Arrays.toString(juggSeq.juggler(n)));
    break;
    case '-':
      if(n>1){
        n--;
        println(n + " term Fibonacci value is: " + fiboSeq.compute(n));
        println(n + " term Golomb value is: " + goloSeq.compute(n));
        println(n + " term Juggler value is: " + Arrays.toString(juggSeq.juggler(n)));
      }
    break;
    case 'p':
      fiboSeq.printFirstN(n, "Fibonacci");
      goloSeq.printFirstN(n, "Golomb");
      juggSeq.printFirstN(n, "Juggler (max value of array)");
    break;
    case '.':
      mode= (mode+1) % 4;
    break;
    case ',':
      if(mode==0){
        mode=3;
      }else{
        mode--;
      }
    break;
  }
}