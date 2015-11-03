class Abundant extends NeilJames{  
  
  String description(){
    return "A number n is abundant if the sum of divisors is greather than n.";
  }
  
  int compute(int i){
    if(i<=0)
      return -1;
    return abundant(i);
  }
   
  /**
   * True if i is abundant
   */
  boolean isNeilJames(int i){                                
    if(sigmaDivisors(i)>i)
        return true;
    return false;
  }
  
  /**
   * Return i abundant number
   */
  int abundant(int i){
    int j=1;
    for(int numberOfAbundants=0; numberOfAbundants<i; j++){
      if(isNeilJames(j)){
        numberOfAbundants++;
      }
    }
    return j-1;
  }
}