'use strict';
define(['parser', 'registry', 'router','form'], function(parser, registry, router, form){
	
	parser.parse(function(){
		//any custom JS to run on registry's items

	});

	router.route('/add', function(){
		//show the add view
		//console.log(AddPropertyForm);
		form.populateForm();
		console.log(form.$el);
		parser.parseEl(form.$el);
	});

	router.start();
});