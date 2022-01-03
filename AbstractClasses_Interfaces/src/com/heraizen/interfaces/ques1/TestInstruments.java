package com.heraizen.interfaces.ques1;

public class TestInstruments {

	public static void main(String[] args) {
		Instrument[] i = new Instrument[10];
		i[0] = new Piano();
		i[1] = new Flute();
		i[2] = new Guitar();
		i[3] = new Flute();
		i[4] = new Piano();
		i[5] = new Guitar();
		i[6] = new Flute();
		i[7] = new Guitar();
		i[8] = new Piano();
		i[9] = new Flute();
		
		for(Instrument ir : i)
		{
			ir.play();
		}
	}

}
