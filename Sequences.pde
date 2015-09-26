/*
Implementación de series (FIBONACCI, GOLOMB, ...) y graficación de las mismas

Por Julián Salomón.
*/

int enesimo=2;                                    //Editar la variable enesimo para cambiar hasta donde se desarrollará la serie

int[] primerosN=new int[enesimo+1];                //Array con los primeros n números

float x, y;

int count;

                            //INICIO funciones para implementación de Golomb
                  
int golomb(int n){                                 //Implementación función Golomb
  if(n==1)                                         //Definición de wikipedia: a(1)=1
    return 1;
  if(n>1)                                          //a(n+1)=1+a(n+1-a(a(n)))
    return 1+golomb(n-golomb(golomb(n-1)));        //a(n)=1+a(n-a(a(n-1)))
  return 0;                                       //Casos indefinidos
}

/*float contarDivisiones(int n){
  float divisiones=1;
  while(golomb(n)==golomb(n-1)){
    divisiones++;
    n--;
  }
  return divisiones;
}

void dibujoGolomb(){
  for(int i=0; i<=golomb(enesimo);i++){
    rect(remapW(i),0,(width-1)/golomb(enesimo),height-1);
    if(i>2){
      for(int j=i; golomb(j)<=golomb(enesimo);j++){
        line(remapW(i), i*height/contarDivisiones(j), remapW(i)+width/golomb(enesimo), i*height/contarDivisiones(j));
      } 
    }
  } //<>//
}*/
                                //FIN funciones para implementación de Golomb
                                

void dibujoSerie(int n, int serie){
  switch(serie){
    case 0:                                              //Implementación gráfico de serie Fibonacci
      dibujoFibonacci(n);
    break;
    case 1:                                              //Implementación gráfico de serie Golomb
      //dibujoGolomb();
    break;
    case 2:                                              //Implementación gráfico de serie --------
    
    break;
  }
}

void setup(){
  size(1000,500);
  smooth();
  for(int i=0; i<=enesimo;i++)
    primerosN[i]=golomb(i);                           //Almacenamiento de los primeros n números
  printArray(primerosN);                            //Impresión de los primeros n números
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
}# POO
