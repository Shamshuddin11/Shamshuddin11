//JavaScript For Calculator

     function myFunction(choice)
	{
		var a = parseInt(document.getElementById("textboxa").value);	
		var b = parseInt(document.getElementById("textboxb").value);
		
		var res;
		switch(choice)
		{
			case '+' :  res = a+b;
							break;
			case '-' :  res = a-b;
							break;
			case '*' :  res = a*b;
							break;
			case '/' :  res = a/b;
							break;
			case '%' : res = a%b;
							 break;
		}
		document.getElementById("res").value = res;
	}
		
	