var sumRandomNumbers = function() {
	var a = Math.floor((Math.random() * 9999));
	var x = a;
	if(a<1000) 
		a=a*10; //se il numero è <1000
	var result = 0;
	while(a>10) {
	result += (a%10);
	a = Math.floor(a/10);
	}
	return (x,result);
};