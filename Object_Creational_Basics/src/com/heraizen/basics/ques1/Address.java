package com.heraizen.basics.ques1;

public class Address {
	private String doornum , street , city , pincode;

	public Address(String doornum, String street, String city, String pincode) {
		super();
		this.doornum = doornum;
		this.street = street;
		this.city = city;
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "Address = ["+doornum+" ,"+street+" ,"+city+" ,"+pincode+"]";
	}
}
