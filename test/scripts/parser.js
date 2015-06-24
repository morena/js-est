define(['jquery', 'registry'], function($, registry){

	return {
		parse: function(callback){
			var collection = $("[data-hw-module]"),
				count = 0,
				total = collection.length;
			
			collection.each(function(){

				var module = $(this).attr('data-hw-module'),
					$el = $(this);

				if(module){
					var param = $el.attr('data-hw-module-param');
					
					require([module], function(Module){
					console.log(Module);
						var module = new Module($el, param);
						registry.register($el, module);
						count++;

						if(count === total){
							callback();
						}
					});
						
				}

			});
		}
	};
});