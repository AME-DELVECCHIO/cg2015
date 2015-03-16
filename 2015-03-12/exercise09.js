function Triangolo(v1,v2,v3) {
	this.v1 = v1;
	this.v2 = v2;
	this.v3 = v3;
}

Triangolo.prototype.lunghezza = function(v1,v2) {
	if (v2.x > v1.x)  
		return (v2.x - v1.x);
	else return (v1.x - v2.x);	
}

Triangolo.prototype.perimetro = function() {
var l1 = this.lunghezza(this.v1,this.v2);
var l2 = this.lunghezza(this.v1,this.v3);
var l3 = this.lunghezza(this.v2,this.v3);
return (l1+l2+l3);
};