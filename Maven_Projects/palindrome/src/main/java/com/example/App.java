package com.skillnext2;

import java.util.Scanner;

public class App 
{
    public static void main( String[] args )
    {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        String reversed = "";

        // reverse string
        for(int i = str.length()-1; i >= 0; i--){
            reversed = reversed + str.charAt(i);
        }

        if(str.equalsIgnoreCase(reversed)){
            System.out.println("Yes! It is a Palindrome 😄");
        } else {
            System.out.println("No! It is NOT a Palindrome ❌");
        }
    }
}
