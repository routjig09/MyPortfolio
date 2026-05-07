public class palindrome {
    public static void main(String[] args){
        String s="madam";
        String rev ="";
        for(int i=s.length()-1;i>=0;i--){
            rev=rev+s.charAt(i);
        }
        if(equals(s,rev)){
            System.out.println("palindrome");
        }
        else{
            System.out.println("not palindrome");
        }
    }

    public static boolean equals(String s1, String s2){
        if(s1.length()!=s2.length()){
            return false;
        }
        for(int i=0;i<s1.length();i++){
            if(s1.charAt(i)!=s2.charAt(i)){
                return false;
            }
        }
        return true;
    }
    
}
