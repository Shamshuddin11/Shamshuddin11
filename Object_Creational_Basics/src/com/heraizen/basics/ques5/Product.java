package com.heraizen.basics.ques5;

public class Product {
	
	private int pid;
	private String pname;
	private float price;
	
	public Product(int pid, String pname, float price) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.price = price;
	}
	
	public void display()
	{
		System.out.println("\n The Product  Id :"+pid+"\n Product Name :"+pname+"\n Product price :"+price);
	}
	
	public static void main(String[] args)
	{
		Product[] arr = new Product[10];
		arr[0] = new Product(1 , "abcd" , 256);
		arr[1] = new Product(2 , "efgh" , 256);
		arr[2] = new Product(3 , "dhi" , 256);
		arr[3] = new Product(4 , "pqr" , 256);
		arr[4]=  new Product(5 , "lmn" , 256);
		arr[5] = new Product(6 , "abr" , 256);
		arr[6] = new Product(7 , "bcd" , 256);
		arr[7] = new Product(8 , "gih" , 256);
		arr[8] = new Product(9 , "gif" , 256);
		arr[9] = new Product(10 , "xyz" , 220);
		
		System.out.println("The Products Infoprmation is :");
		for(int i = 0 ; i < arr.length ; i++)
		{
			arr[i].display();
		}
		
	}
}
