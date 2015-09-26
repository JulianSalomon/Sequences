         //INICIO funciones para implementación de Fibonacci

int fibo(int n){                                   //Implementación función Fibonacci
  if(n==0)
    return 0;                                      //a(0)=0
  if(n==1)
    return 1;                                      //a(1)=1
  if(n>1)
    return fibo(n-1)+fibo(n-2);                    //a(n)=a(n-1)+a(n-2)
  return -1;                                       //Casos indefinidos
}

int sum(int i){                                    //Sumatoria modificada para hallar la primera coordenada x, y de Fibonacci
  int resultado=0;
  for(int j=0;(i+j*4)<=enesimo;j++)
    resultado+=fibo(i+j*4);
  return resultado;
}

void dibujoRect(int n, float nW, float nH){
  stroke(150,0,0);
  int a=fibo(n);
  textSize(map(a,0,fibo(enesimo),0,100));
  switch(n%4){
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
  textSize(13);
  noFill();
}

void dibujoFibonacci(int n){  
  float nH=remapH(fibo(n)*2), nW=remapW(fibo(n)*2);
  switch(count){
    case 0:                                          //Primera coordenada tomada como referencia
      if(n==1){
        x=remapW(detWid()-sum(n+1));
        y=remapH(detHei()-sum(n));
        arc(x,y,nW,nH,HALF_PI,PI);
      }
      if(n==2){
        arc(x,y,nW,nH,0,HALF_PI);
        count=3;
      }
    break;
    case 1:                                          //Condicion para todos los arcos que son desde PI/2 hasta PI
      x=x+remapW(fibo(n-2));
      arc(x,y,nW,nH,HALF_PI,PI);
      count++;
    break;
    case 2:                                          //Condicion para todos los arcos que son desde 0 hasta PI/2
      y=y-remapH(fibo(n-2));
      arc(x,y,nW,nH,0,HALF_PI);
      count++;
    break;
    case 3:                                          //Condicion para todos los arcos que son desde 3PI/2 hasta 2PI
      x=x-remapW(fibo(n-2));
      arc(x,y,nW,nH,PI+HALF_PI,TWO_PI);
      count++;
    break;
    case 4:                                          //Condicion para todos los arcos que son desde PI hasta 3PI/2
      y=y+remapH(fibo(n-2));
      arc(x,y,nW,nH,PI,PI+HALF_PI);
      count=1;
    break;
  }
  dibujoRect(n, nW, nH);
  stroke(255);
}

                  //FIN funciones para implementación de Fibonacci# POO
