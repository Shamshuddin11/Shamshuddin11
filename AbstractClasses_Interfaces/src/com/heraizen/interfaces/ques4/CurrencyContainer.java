package com.heraizen.interfaces.ques4;

public class CurrencyContainer {
	
	public static CurrencyInter getCurrency(String country)
	{
		if(country.equalsIgnoreCase("India"))
		{
			return new India();
		}
		if(country.equalsIgnoreCase("UK"))
		{
			return new UK();
		}
		if(country.equalsIgnoreCase("USA"))
		{
			return new USA();
		}
		else
			throw new IllegalArgumentException();
	}

}
