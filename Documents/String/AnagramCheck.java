import java.util.Scanner;

public class AnagramCheck {

    static boolean isAnagram(String a, String b) {
        // Normalize case
        a = a.toLowerCase();
        b = b.toLowerCase();

        // If lengths differ, cannot be anagrams
        if (a.length() != b.length()) {
            return false;
        }

        // Frequency array for 26 letters
        int[] freq = new int[26];

        // Count frequencies from first string
        for (int i = 0; i < a.length(); i++) {
            freq[a.charAt(i) - 'a']++;
        }

        // Subtract frequencies from second string
        for (int i = 0; i < b.length(); i++) {
            freq[b.charAt(i) - 'a']--;
        }

        // Check if all frequencies are zero
        for (int f : freq) {
            if (f != 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String a = sc.next();
        String b = sc.next();

        sc.close();

        if (isAnagram(a, b)) {
            System.out.println("Anagrams");
        } else {
            System.out.println("Not Anagrams");
        }
    }
}
