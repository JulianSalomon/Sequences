
                  //INICIO funciones para implementación de Juggler Sequence 

boolean isEven(int n) {
  if(n%2==0)
    return true;
  return false;
}

int proc(int n) {
  if(isEven(n))
    return floor(sqrt(n));
  return floor(sqrt(n)*sqrt(n)*sqrt(n));
}

int tamArr(int n) {
  int a;
  for(a=0; n>1; a++)
    n=proc(n);
  return a+1;
}

int[] juggler(int n) {
  int tam=tamArr(n);
  int jugg[]= new int[tam];
  jugg[0]=n;
  for(int i=0; i+1<tam; i++) {
    jugg[i+1]=proc(n);
    n=jugg[i+1];
  }
  return jugg;
}

float diam(){
  if(width>height)
    return height;
  return width;
}

void dibujoJuggler(){
  int tam=tamArr(enesimo);
  int arr[]=new int[tam];
  arr=juggler(enesimo);
  int sum=0;
  float start=0, stop=0, textX=0, textY=0;
  for(int i=0;i<tam;i++){
    sum+=arr[i];
  }
  float rad=diam()/2;
  for(int i=0;i<tam;i++){
    start=stop;
    stop+=float(arr[i])*TWO_PI/sum;
    arc(width/2,height/2,rad*2, rad*2, start, stop, PIE);
    textX=3*rad/4*(cos((stop-start)/2+start));
    textY=3*rad/4*(sin((stop-start)/2+start));
    text(arr[i], width/2+textX , height/2+textY);
  }
}


                  //FIN funciones para implementación de Juggler Sequence