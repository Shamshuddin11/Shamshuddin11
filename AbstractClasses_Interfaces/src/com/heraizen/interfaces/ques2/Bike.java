package com.heraizen.interfaces.ques2;

public class Bike implements Game {

	@Override
	public void start() {
		System.out.println("\nBike Game Starting");

	}

	@Override
	public void play() {
		System.out.println("\nBike Game Playing");

	}

	@Override
	public void stop() {
		System.out.println("\nBike Game Stopped");

	}

}
