'use strict';

define(['utilities/router', 'jquery', "utilities/compose"], 
	function(router, $, compose){
	
	var Navigation = compose({
		
		initialise: function($el){
			this.manageNavLinks($el);
		},

		manageNavLinks: function($el){
			$el.find("ul li a").each(function(){
				$(this)[0].addEventListener("click", function (event) {
					event.preventDefault();
					var url = $(this).attr("href");

					router.navigate(url);
				})
			})
		}
	});

	return Navigation;
});