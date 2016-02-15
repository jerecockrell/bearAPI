var Calculator = function() {
	return {
		sum: function(a,b){
			return a + b
		},
		subtract: function(a,b){
			if(a > b){
				return a - b;
			} else {
				return b - a;
			}
		}
	}
}

module.exports = Calculator;