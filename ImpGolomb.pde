                                //INICIO funciones para implementación de Golomb
                  
int golomb(int n){                                 //Implementación función Golomb
  if(n==1)                                         //Definición de wikipedia: a(1)=1
    return 1;
  if(n>1)                                          //a(n+1)=1+a(n+1-a(a(n)))
    return 1+golomb(n-golomb(golomb(n-1)));        //a(n)=1+a(n-a(a(n-1)))
  return 0;                                        //Casos indefinidos
}

float contarDivisiones(int n){                    //Divisiones verticales
  float divisiones=1;
  while(golomb(n)==golomb(n-1) && n<=enesimo){
    divisiones++;
    n--;
  }
  return divisiones;
}

void dibujoGolomb(){
 int nAct=1;
 float div;
 float sizeWidth;
 for(int i=0; i<=golomb(enesimo); i++){
   x=remapW(i);
   sizeWidth=width/golomb(enesimo);
   rect(x, 0, sizeWidth, height-1);
   
   while(golomb(nAct+1)==i && nAct+1<=enesimo)
     nAct++;
     div=contarDivisiones(nAct);
     for(int j=0; j<div; j++){
       rect(remapW(i-1), j*height/div, width/golomb(enesimo), height/div);
       text(golomb(nAct),remapW(i-1)+width/(2*golomb(enesimo)),j*height/div+height/(2*div));
     }
   while(golomb(nAct)==i)
     nAct++;
 }
}
                                //FIN funciones para implementación de Golomb