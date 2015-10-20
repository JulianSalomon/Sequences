class golomb extends Sequence{

  String author(){
    return "Solomon Wolf Golomb";
  }
  
  String description(){
    return "a(n) is the number of times that n occurs in the sequence, starting with a(1)=1";
  }
  
  int compute(int i){                                //Implementación función Golomb
    if(i==1)                                         //Definición de wikipedia: a(1)=1
      return 1;
    if(i>1)                                          //a(n+1)=1+a(n+1-a(a(n)))
      return 1+compute(i-compute(compute(i-1)));     //a(n)=1+a(n-a(a(n-1)))
    return 0;                                        //Casos indefinidos
  }

  void display(int n){
   int nAct=1;
   float div;
   float sizeWidth;
   for(int i=0; i<=compute(n); i++){
     x=remapW(i);
     sizeWidth=width/compute(n);
     rect(x, 0, sizeWidth, height-1);
     
     while(compute(nAct+1)==i && nAct+1<=n)
       nAct++;
       div=contarDivisiones(nAct);
       for(int j=0; j<div; j++){
         rect(remapW(i-1), j*height/div, width/compute(n), height/div);
         text(compute(nAct),remapW(i-1)+width/(8*compute(n)),j*height/div+height/(2*div));
       }
     while(compute(nAct)==i)
       nAct++;
    }
  }
  
  float contarDivisiones(int i){                    //Divisiones verticales
    float divisiones=1;
    while(compute(i)==compute(i-1) && i<=n){
      divisiones++;
      i--;
    }
    return divisiones;
  }
  
}