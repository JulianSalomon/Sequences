/* //<>//
Implementación de series (FIBONACCI, GOLOMB, ...) y graficación de las mismas
 
 Por Julián Salomón.
 */
 
import java.util.Arrays;                                //Tomado de http://docs.oracle.com/javase/7/docs/api/java/util/Arrays.html
                                                        //Utilizado para imprimir Array en consola con primerosN terminos

int enesimo=1;                                         //Editar la variable enesimo para cambiar hasta donde se desarrollará la serie

//int[] primerosN=new int[enesimo];                       //Array con los primeros n números
int primeros_N=25;                                       //Variable para imprimir primeros n números

float x, y;

int count;

void dibujoSerie(int n, int serie) {
  switch(serie) {
  case 0:                                              //Implementación gráfico de serie Fibonacci
    dibujoFibonacci(n);
  break;
  case 1:                                              //Implementación gráfico de serie Golomb
    dibujoGolomb();
  break;
  case 2:                                              //Implementación gráfico de serie --------
    dibujoJuggler();
  break;
  }
}

void printSeq() {
  //for(int i=0; i<=;i++)
  //primerosN[i]=golomb(i);                           //Almacenamiento de los primeros n números
  println("n      Golomb      Fibo      Juggler");
  for (int i=1; i<=primeros_N; i++) {
    println(i, "     |     ", golomb(i), "     |     ", fibo(i) , "     |     ", Arrays.toString(juggler(i)));                            //Impresión de los primeros n números de la serie
                                                                   //Función toString para convertir el Array en String.
  }
}

void setup() {
  size(1000, 500);
  smooth();
  printSeq();
}

int serie;

void draw() {
  background(0);
  if (mouseX<=width/3) {                              //Primera serie en el primer tercio de la pantalla (FIBONACCI)
    serie=0;
    fill(255);
    text("Fibonacci", 0, 10);
    noFill();
    stroke(255);
  }
  if (mouseX>width/3 && mouseX<=2*width/3) {
    serie=1;
    fill(255);
    text("Golomb", 0, 10);
    noFill();                                       //Segunda serie en el segundo tercio de la pantalla (GOLOMB)
  }
  if (mouseX>2*width/3 && mouseX<=width) {
    serie=2;
    fill(255);
    text("Juggler", 0, 10);
    noFill();                                      //Tercera serie en el ultimo tercio de la pantalla (JUGGLER)
  }
  for (int i=1; i<=enesimo; i++)
    dibujoSerie(i, serie);                             //Graficación de la serie
  count=0;
}

void mouseReleased() {
  if (mouseButton == LEFT) { 
    enesimo++;
    println(enesimo);
    background(0);
  }
  if (mouseButton == RIGHT) {
    enesimo--;
    println(enesimo);
    background(0);
  }
}