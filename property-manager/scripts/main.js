'use strict';
define(['jquery', 'utilities/parser', 'utilities/registry', 'utilities/router','widgets/form/form', 'models/PropertyManager'], 
	function($, parser, registry, router, form, PropertyManager){

	var view = $('#viewContainer');

	parser.parse(function(){
		//any custom JS to run on registry's items
	});

	router.route('/add', function(){
		//show the add view
		form.populateForm().then(function(){
			parser.parse(null, view);
		});
	});

	router.route('/added', function(){
		//confirm property has been added and display it
		PropertyManager.showProperty();
	});


	router.route('/viewAllProperties', function(){
		//show all the properties added so far
		PropertyManager.viewAllProperties();
	});

	router.start();
});