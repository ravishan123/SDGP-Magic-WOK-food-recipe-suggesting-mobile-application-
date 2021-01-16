package com.company;

public class Main {

    public static void main(String[] args) {
	 for(int i =0;i<10;i++){
     System.out.println("run.....");
   }
	 int i=0;

	 while(i<10){
	   if (i==4){
	     i++;
	     continue;

     }
     System.out.println(i+" Loading.....");
	   i++;
     }
   }

    }

