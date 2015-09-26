/*
Implementación de series (FIBONACCI, GOLOMB, ...) y graficación de las mismas

Por Julián Salomón.
*/

int enesimo=1;                                    //Editar la variable enesimo para cambiar hasta donde se desarrollará la serie

int[] primerosN=new int[enesimo];                        //Array con los primeros n números
int primeros_N=20;

float x, y;

int count;
 //<>//
void dibujoSerie(int n, int serie){
  switch(serie){
    case 0:                                              //Implementación gráfico de serie Fibonacci
      dibujoFibonacci(n);
    break;
    case 1:                                              //Implementación gráfico de serie Golomb
      dibujoGolomb();
    break;
    case 2:                                              //Implementación gráfico de serie --------
    
    break;
  }
}

void printSeq(){
  println("Golomb      LS      Fibo");
  /*for(int i=0; i<=;i++)
    primerosN[i]=golomb(i);                           //Almacenamiento de los primeros n números*/
    
  for(int i=1; i<=primeros_N; i++)
    println("  ", golomb(i), "       ", "      " , fibo(i));                            //Impresión de los primeros n números de la serie
}

void setup(){
  size(1000,500);
  smooth();
  printSeq();
}

int serie;

void draw(){
  background(0);
  if(mouseX<=width/3){                              //Primera serie en el primer tercio de la pantalla (FIBONACCI)
    serie=0;
    fill(255);
    text("Fibonacci",0,10);
    noFill();
    stroke(255);
  }
  if(mouseX>width/3 && mouseX<=2*width/3){
    serie=1;
    fill(255);
    text("Golomb",0,10);
    noFill();                                       //Segunda serie en el segundo tercio de la pantalla (GOLOMB)
  }
  if(mouseX>2*width/3 && mouseX<=width){
    serie=2;
    fill(255);
    text("---",0,10);
    noFill();
                                                    //Tercera serie en el ultimo tercio de la pantalla (--------)
  }
  for(int i=1; i<=enesimo;i++)
    dibujoSerie(i,serie);                             //Graficación de la serie
  count=0;
}

void mouseReleased(){
  if(mouseButton == LEFT){ 
    enesimo++;
    println(enesimo);
    background(0);
  }
  if(mouseButton == RIGHT){
    enesimo--;
    println(enesimo);
    background(0);
  }
}