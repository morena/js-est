'use strict';

define(['utilities/compose',
	'text!/templates/home.mst',
	'mustache'], 
	function(compose, template, mustache){
	var Home = compose({
		
		view: $('#viewContainer'),
		
		initialise:function(){
			this.populateHtml();
		},

		populateHtml: function(){
			var render = mustache.render(template);

			this.view.html(render);
		}
	});

	return Home;
});