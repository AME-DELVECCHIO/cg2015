/* exercise03a */
var capitalize = function(word) {
	var result = word.charAt(0);
	result = result.toUpperCase(result);
	return result + (word.substring(1));
};


/* exercise03b */
var allCapitalize = function() {
var string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var result = "";
for(var i=0;i<string.length;i++) {
	if((string.charAt(i)===" ") || (string.charAt(i)===".")) {
		result += capitalize(string.slice(0,i+1));
		string = string.slice(i+1,string.length);
		i=0;
	}
}
return result;
};