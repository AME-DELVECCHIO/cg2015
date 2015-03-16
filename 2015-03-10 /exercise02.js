/* exercise02a */
var push = function(n) {
	var result = [];
	for(var i=1; i<=n; i++) {
	var x = Math.floor((Math.random() * n));
	result.push(x);
	}
	return result;
};

/* exercise02b */
var isOdd = function (n) {
	return (n%2==1);
};

var dispari = push(10).filter(isOdd);

/* exercise02c */
dispari.sort();