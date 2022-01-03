package com.heraizen.interfaces.ques2;

public class TestGame {

	public static void main(String[] args) {
		Game[] g = new Game[10];
		int r = 0;
		
		
		for(int i = 0 ; i < g.length ; i++)
		{
			r= (int)(Math.random()*4);
			switch(r)
			{
			 case 1 : g[i] = new Car();
			 			break;
			 case 2 : g[i] = new Bike();
			 			break;
			 case 3 : g[i] = new Bicycle();
			 			break;
			 default : --i;
			}
		}
		
		for(Game gr : g)
		{
			gr.start();
			gr.play();
			gr.stop();
		}
	}

}
