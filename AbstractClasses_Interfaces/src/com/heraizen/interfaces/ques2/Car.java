package com.heraizen.interfaces.ques2;

public class Car implements Game {

	@Override
	public void start() {
		System.out.println("\nCar Game Starting");
	}

	@Override
	public void play() {
		System.out.println("\nCar Game Playing");
	}

	@Override
	public void stop() {
		System.out.println("\nCar Game Stopped");
	}

}
