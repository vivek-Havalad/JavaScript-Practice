Object.prototype.b = function(val) {
	this.__proto__ = val;

	return this;
}

function c(da) {
	console.log(da)
}
let x = c.b(this, 10);


