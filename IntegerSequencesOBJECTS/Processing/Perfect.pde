class Perfect extends NeilJames{  
  
  String description(){
    return "A number n is perfect if the sum of divisors is equal to n.";
  }
  
  int compute(int i){
    if(i<=0)
      return -1;
    return perfect(i);
  }
  
  /**
   * True if i is perfect
   */
  boolean isNeilJames(int i){                                
    if(sigmaDivisors(i)==i)
        return true;
    return false;
  }
  
  /**
   * Return i abundant number
   */
  int perfect(int i){
    int j=1;
    for(int numberOfPerfects=0; numberOfPerfects<i; j++){
      if(isNeilJames(j)){
        numberOfPerfects++;
      }
    }
    return j-1;
  }
}