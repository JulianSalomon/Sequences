// Objects declaration
Fibonacci fiboSeq;
Golomb goloSeq;
Juggler juggSeq;
Deficient defiSeq;
Abundant abunSeq;
Perfect perfSeq;

int n=1, serie, mode, counter;   

void setup() {
  size(1400, 800);
  background(0);
  colorMode(HSB, 360, 100, 100);
  noFill();
  smooth();
  // Object init
  fiboSeq = new Fibonacci();
  goloSeq = new Golomb();
  juggSeq = new Juggler();
  defiSeq = new Deficient();
  abunSeq = new Abundant();
  perfSeq = new Perfect();
}

void draw() {
  background(0);
  dibujoSerie();
}

void dibujoSerie() {
  switch(serie) {
    case 0:                                              //Implementación gráfico de serie Fibonacci
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
    case 1:                                              //Implementación gráfico de serie Golomb
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
    case 2:                                              //Implementación gráfico de serie Juggler
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
      case 3:                                              //Implementación gráfico de serie Deficient
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
      case 4:                                              //Implementación gráfico de serie Abundant
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
      case 5:                                              //Implementación gráfico de serie Perfect
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

void keyPressed() {
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
