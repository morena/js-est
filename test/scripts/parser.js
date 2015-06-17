define(['jquery'], function($){

	return {
		parse: function(){
			$("[data-hw-module]").each(function(){
				var module = $(this).attr('data-hw-module'),
					$el = $(this);
				if(module){
					var param = $el.attr('data-hw-module-param');

					console.log(module);
					
					require([module], function(something){
						console.log(something);
						//var module = new Module(param);
					});
				}
			});
		}
	};
});