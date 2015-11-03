class Deficient extends NeilJames{
  
  String description(){
    return "A number n is deficient if the sum of divisors is less than n.";
  }
  
  int compute(int i){
    if(i<6 && i>0)
      return i;
    if(i<=0)
      return -1;
    return sigma(deficients(i));
  }
  
  /**
   * True if i is deficient
   */
  boolean isNeilJames(int i){                                
    if(sigmaDivisors(i)<i)
        return true;
    return false;
  }
  
  /**
   * Sum of an ArrayList
   */
  int sigma(ArrayList<Integer> defi){
    int sum=0;
    for(int j=0; j<defi.size(); j++)
      sum+=defi.get(j);
    return sum;
  }
  
  /**
   * ArrayList for sigma and obtain i sequence number
   */
  ArrayList deficients(int i){ 
    ArrayList<Integer> defi = new ArrayList<Integer>();
    defi.add(0, 0);
    defi.add(1, 1);
    for(int j=2; j<=i; j++){
      if(isNeilJames(sigma(defi)+1)){
        defi.add(j,1);
      } else {
        defi.add(j,2);
      }
    }
    return defi;
  }
}