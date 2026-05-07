public class CountCase {
    public static void main(String[] args){
        String s="Jii096c%%3@mMY";
        int up=0;
        int lc=0;
        int dig=0;
        int sp=0;
        for(int i=0;i<s.length();i++){
            char ch=s.charAt(i);
            if(ch>='A' && ch<='Z'){
                up++;
            }
            else if(ch>='a' && ch<='z'){
                lc++;
            }
            else if(ch>='0' && ch<='9'){
                dig++;
            }
            else{
                sp++;
            }
        }
        System.out.println(up);
        System.out.println(lc);
        System.out.println(dig);
        System.out.println(sp);
    }

        
    
}
