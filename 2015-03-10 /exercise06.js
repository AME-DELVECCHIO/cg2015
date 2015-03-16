/* exercise06a */
var allEvenRandom = function() {
	var x = Math.floor((Math.random() * 100));
	var i=2;
	var result = [0];
	while(i<=x) {
		result.push(i);
		i = i+2;
	}
	return result;
}