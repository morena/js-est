'use strict';
define(['parser', 'registry', 'router'], function(parser, registry, router){
	
	parser.parse(function(){
		//any custom JS to run on registry's items

	});

	router.route('/add', function(){
		console.log('add route matched');
		//show the add view
	});

	router.start();
});