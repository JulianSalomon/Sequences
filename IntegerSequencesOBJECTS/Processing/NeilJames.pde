abstract class NeilJames extends Sequence{
  
  /**
   * The sequences Abundant, Deficient and Perfect author
   */
  String author(){
    return "Neil James Alexander Sloane";
  }
  
  /**
   * Determine if is an Abundant, Deficient or Perfect number
   */
  abstract boolean isNeilJames(int i);
  
  /**
   * Computes the nth sequence term
   */
  abstract int compute(int n);
  /**
   * Find divisors of i number
   */
   
   void display(int i){
     int counter=1, rects=ceil(sqrt(i));
     float rectWidth=7*width/(8*rects), rectHeight=7*height/(8*rects);
     textSize(15);
     for(int j=0; j<rects && counter<=i; j++){
       for(int k=0; k<rects && counter<=i; k++){
         if(isNeilJames(counter)){
           fill(0, 50, 0);
         } else {
           fill(0, 100, 50);
         }
         rect(k*rectWidth+width/16, j*rectHeight+height/16 , rectWidth, rectHeight);
         fill(0, 0, 100);
         text(counter, k*rectWidth+width/16, j*rectHeight+height/16+15);
         counter++;
       }
     }
     noFill();
     stroke(255);
   }
   
   ArrayList divisors(int i){                                
    ArrayList<Integer> div = new ArrayList<Integer>();
    div.add(0, -1);
    for(int j=1; j<=i; j++){
      if(i%j==0){
        div.add(j,j);
      }else{
        div.add(j,0);
      }
    }
    return div;
  }
    
  /**
   * Sum of divisors of i number
   */
  int sigmaDivisors(int i){                                 
    ArrayList<Integer> divisors = divisors(i);
    int sigma=0;
    for(int j=1; j<i; j++){
      sigma+=divisors.get(j);
    }
    return sigma;
  }  
}