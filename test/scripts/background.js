define(['jquery', 'Base'], function($, Base){

	var Background = function($el, params){
		this.initialise($el, params);
	}
	//let Background inherit from Base
	Background.prototype = Object.create(Base.prototype);
	Background.prototype.constructor = Background;

	Background.prototype = {
		initialise: function($el, params){

			Base.prototype.initialise.apply(this, arguments);

			params = params();

			if(params){
				for(var param in params){
					$($el).css(param, params[param]);
				}
			}
		}
	}

	return Background;
});