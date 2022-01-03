package com.heraizen.interfaces.ques2;

public class Bicycle implements Game {

	@Override
	public void start() {
		System.out.println("\nBiCycle Game Starting");

	}

	@Override
	public void play() {
		System.out.println("\nBiCycle Game Playing");

	}

	@Override
	public void stop() {
		System.out.println("\nBiCycle Game Stopped");

	}

}
