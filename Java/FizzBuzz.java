public class FizzBuzz {
    public String fizzBuzz(int numb) {
        String result;
        if(numb%15==0) {
            result = "FizzBuzz";
            return(result);
        } else if(numb%5==0) {
            result = "Buzz";
            return(result);
        } else if(numb%3==0) {
            result = "Fizz";
            return(result);
        } else {
            result = Integer.toString(numb);
            return(result);
        }
        
    }
}