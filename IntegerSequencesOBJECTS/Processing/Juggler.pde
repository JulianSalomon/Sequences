class Juggler extends Sequence{

  String author(){
    return "Clifford Alan Pickover";
  }
  
  String description(){
    return "Starts with a positive integer a(0) and each subsequent term is defined by the relation: a(k+1)=floor(a(k)^(1/2)) if a(k) is even, else a(k+1)=floor(a(k)^(3/2))";
  }

  boolean isEven(int i) {
    if(i%2==0)
      return true;
    return false;
  }
  
  int proc(int i) {
    if(isEven(i))
      return floor(sqrt(i));
    return floor(sqrt(i)*sqrt(i)*sqrt(i));
  }
  
  int tamArr(int i) {
    int a;
    for(a=0; i>1; a++)
      i=proc(i);
    return a+1;
  }
  
  int compute(int i){
    int tam=tamArr(i), number=0;
    int a[]= new int[tam];
    a=juggler(i);
    for(int j=0; j<tam; j++){
      if(a[j]>number)
        number=a[j];
    }
    return number;
  }
  
  int[] juggler(int i){
    int tam=tamArr(i);
    int jugg[]= new int[tam];
    jugg[0]=i;
    for(int j=0; j+1<tam; j++) {
      jugg[j+1]=proc(i);
      i=jugg[j+1];
    }
    return jugg;
  }
  
  float diam(){
    if(width>height)
      return height;
    return width;
  }
  
  void display(int n){
    textSize(15);
    int tam=tamArr(n);
    int arr[]=new int[tam];
    arr=juggler(n);
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
}