class Fibonacci extends Sequence{  
  String author(){
    return "Leonardo Bonacci";
  }
  
  String description(){
    return "Fibonacci sequence returns 1 for first two and the sum of last two numbers.";
  }
  
  int compute(int i){
    if(i==1 || i==2)
      return 1;                                      //a(1)=1, a(2)=2
    if(i>1)
      return compute(i-1)+compute(i-2);              //a(n)=a(n-1)+a(n-2)
    return -1;                                       //Casos indefinidos
  } 
  
  
  void display(int i){
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
  
  int sum(int i){                                    //Sumatoria modificada para hallar la primera coordenada x, y de Fibonacci
    int resultado=0;
    for(int j=0;(i+j*4)<=n;j++)
      resultado+=compute(i+j*4);
    return resultado;
  }
  
  void dibujoRect(int i, float nW, float nH){
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