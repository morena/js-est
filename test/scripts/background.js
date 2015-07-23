define(['jquery', 'Base'], function($, Base){
	var Background = compose(Base, {

		initialise: function($el, params){

			Base.prototype.initialise.apply(this, arguments);

			params = params();

			if(params){
				for(var param in params){
					$($el).css(param, params[param]);
				}
			}
		}
	});

	return Background;
});
