var push = function(n) {
	var result = [];
	for(var i=1; i<=n; i++) {
	result.push(i);
	}
	return result;
};

var parità = function (n) {
	return (n%2==0);
};

var double = function (n) {
	return (n*2);
};

var isFour = function(n) {
	return (n%4==0);
};

var maiuscola = function(item) {
	var x = item.charAt(0);
	x.toUpperCase();
	var y = item.subString(1);
	return (x+y);
}

var pari = push(10).filter(parità);	

pari.map(double);

var four = push(10).filter(isFour);

