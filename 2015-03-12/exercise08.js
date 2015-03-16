/* 08 */
function Point2D(x,y) {
	this.x = x;
	this.y = y;
}

/* 08a */
function Edge(p1,p2) {
	this.v1 = p1;
	this.v2 = p2;
}

/* 08b */
Edge.prototype.length = function() {
	if (this.v2.x > this.v1.x)  
		return (this.v2.x - this.v1.x);
	else return (this.v1.x - this.v2.x);
}	