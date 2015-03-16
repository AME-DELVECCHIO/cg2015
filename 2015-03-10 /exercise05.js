/* exercise05 */
var bigFromCasual = function() {
	var a = Math.floor((Math.random() * 100));
	var b = Math.floor((Math.random() * 100));
	var c = Math.floor((Math.random() * 100));
	var result = 0;
	(a>b) && (a>c) && (result = a);
	(b>a) && (b>c) && (result = b);
	(c>a) && (c>b) && (result = c);
	return result;
}