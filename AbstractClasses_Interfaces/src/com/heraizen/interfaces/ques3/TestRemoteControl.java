package com.heraizen.interfaces.ques3;

public class TestRemoteControl {
	
	public static void main(String[] args)
	{
		RemoteControl r = new DvdRemote();
		 
		System.out.println("\n Is Dvd on "+r.powerOnOff());
		System.out.println("\n Increase the Volume of DVD by 4 Volumes "+ r.volumeUp(4));
		System.out.println("\n Decrease the Volume of DVD by 2 Volumes "+ r.volumeDown(2));
		System.out.println("\n Is Dvd on "+r.powerOnOff());
		r = new TVRemote();
		
		System.out.println("\n Is TV on "+r.powerOnOff());
		System.out.println("\n Increase the Volume of TV by 5 Volumes "+ r.volumeUp(5));
		System.out.println("\n Decrease the Volume of TV by 3 Volumes "+ r.volumeDown(3));
		System.out.println("\n Is TV on "+r.powerOnOff());
	}

}
