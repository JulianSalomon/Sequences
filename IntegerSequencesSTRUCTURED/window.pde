float detWid(){                                    //Función que determina el Ancho para las series
  switch(serie){
    case 0:
      if(enesimo%2==0)
        return fibo(enesimo)+fibo(enesimo-1);
      return fibo(enesimo);
    case 2:
    break;
  }
  return 0;
}

float detHei(){                                    //Función que determina el Alto
  switch(serie){
    case 0:
      if(enesimo%2==0)
        return fibo(enesimo);
      return fibo(enesimo+1);
    case 2:
    break;
  }
  return 0;
}

float remapW(float x){                             //Mapeo de coordenadas en width-1 para ver cuadrículas correctamente
  switch(serie){
    case 0:
      return map(x,0,detWid(),0,width-1);
    case 1:
      return map(x,0,golomb(enesimo),0,width-1);
  }
  return 0;
}

float remapH(float y){                             //Mapeo de coordenadas en height-1 ...
  return map(y,0,detHei(),0,height-1);
}