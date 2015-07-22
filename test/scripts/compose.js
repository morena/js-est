define([], function(){

	compose = function(){

		var Constructor = function(){

		};

		//Constructor.prototype.constructor = arguments[0];
		console.log(arguments[0]);

		for(something in arguments[0]){
			Constructor.prototype[something] = arguments[0][something];
		}

		console.log(Constructor);


		return Constructor;

		//child.prototype = Object.create(parent.prototype);
		//child.prototype.constructor = child;
	}

	return compose;
});