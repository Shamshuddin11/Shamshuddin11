package com.heraizen.interfaces.ques3;

public class TVRemote implements RemoteControl {
	
	public static final int MAX_SOUND = 50;
	public static final int MIN_SOUND = 4;
	private boolean on_off = false;
	private int vol = MIN_SOUND;
	@Override
	public boolean powerOnOff() {
		if(on_off)
		{
			on_off = false;;
		}
		else
			on_off = true;
		
		return on_off;
	}

	@Override
	public int volumeUp(int increment) {
		if(vol < MAX_SOUND && (vol+increment) < MAX_SOUND)
		{
			vol += increment;
		}
		return vol;
	}

	@Override
	public int volumeDown(int decrement) {
		if(vol > MIN_SOUND && (vol-decrement) > MIN_SOUND)
		{
			vol -= decrement;
		}
		return vol;
	}

	@Override
	public void mute() {
		vol = MIN_SOUND;

	}

}
