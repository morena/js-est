define(['jquery'], function($){

	return {
		parse: function(){
			$("[data-hw-module]").each(function(){
				var module = $(this).attr('data-hw-module'),
					$el = $(this);
				if(module){
					var param = $el.attr('data-hw-module-param');
					
					require([module], function(Module){
						var module = new Module(param);
					});
				}
			});
		}
	};
});