define([],function(){

	var mixin = function(params, dest){
		for(var attr in params){
			// if what you're passing in is an object
			if(typeof params[attr] === 'object'){
				// call this function recursively
				dest[attr] = mixin(params[attr], clone(dest[attr]));
			}
			else{
				dest[attr] = params[attr];
			}
		}

		return dest;
	};

	// this is used when we recursively want to convert a string to an object
	// if we didn't use clone() we'd end up accidentally reusing an old instance
	var clone = function(obj){
		var newObj = {};

		for(var attr in obj){
			newObj[attr] = obj[attr];
		}

		return newObj;
	};

	var Base = function($el, params){
		this.initialise($el, params);
	};

	Base.prototype = {
		initialise: function($el, params){
			mixin(params, this);
		}
	}

	return Base;

});