define(['jquery'], function($){
	
	var Background = function($el, param){
		this.initialise($el, param);
	}

	Background.prototype = {
		initialise: function($el, param){
			if(param){
				$($el).css('backgroundColor', param);
			}
		}
	}

	return Background;
});