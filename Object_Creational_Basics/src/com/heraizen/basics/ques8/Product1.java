package com.heraizen.basics.ques8;

public class Product1 {
	
	private int pid;
	private String pname;
	private int price;
	
	
	public Product1(int pid, String pname, int price) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.price = price;
	}
	
	public void swapPrice(Product1 p)
	{
		this.price = this.price^p.price;
		p.price = this.price^p.price;
		this.price = this.price^p.price;
	}
	
	@Override
	public String toString() {
		return "Product1 [pid=" + pid + ", pname=" + pname + ", price=" + price + "]";
	}
	
	public  static void main(String[] args)
	{
		Product1 laptop = new Product1(101 , "Lenovo" , 35000);
		
		Product1 desktop = new Product1(101 , "Lenovo" , 50000);
		
		System.out.println("\nLaptop info before swapping is "+laptop);
		System.out.println("\nDesktop info before swapping is "+desktop);
		
		laptop.swapPrice(desktop);
		
		System.out.println("\nLaptop info after swapping is "+laptop);
		System.out.println("\nDesktop info after swapping is "+desktop);
	}

	
}
