define(['jquery', 'registry'], function($, registry){
	return {
		parse: function(callback, $el){

			$el = $el || $(document.body);

			var collection = $el.find("[data-hw-module]"),
				count = 0,
				total = collection.length;
			
			collection.each(function(){

				var module = $(this).attr('data-hw-module'),
					$el = $(this);

				if(module){

					var params = $el.attr('data-hw-module-params'),
						fnc = new Function('return {' + params + '}');

					require([module], function(Module){

						var module = new Module($el, fnc);
						registry.register($el, module);
						count++;

						if(count === total){
							if(typeof callback === 'function'){
								callback();
							}
						}
					});
				}

			});
		}
	}
});