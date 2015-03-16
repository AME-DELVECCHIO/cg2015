var Bingo = {
	secret : Math.floor((Math.random() * 10)),
	guess : function(number) {
		return (this.secret === number);
	}
};

/* per testare */
var x = Bingo.secret;
Bingo.guess(x);