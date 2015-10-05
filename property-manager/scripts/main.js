'use strict';

define(['jquery', 
	'utilities/parser', 
	'utilities/registry', 
	'utilities/router',
	'widgets/form/form', 
	'widgets/viewProperty', 
	'widgets/viewAllProperties',
	'models/PropertyManager',
	'models/Home'], 
	function($, parser, registry, router, form, viewProperty, viewAllProperties, PropertyManager, Home){

	var view = $('#viewContainer');

	parser.parse(function(){
		//any custom JS to run on registry's items
	});

	router.route('/', function(){
		//show the intro text
		var HomeObj = new Home();
		HomeObj.populateHtml();
	});

	router.route('/add', function(){
		//show the add view
		form.populateForm();
		parser.parse(null, view);

	});

	router.route('/added', function(){
		//confirm property has been added and display it
		var viewPropertyObj = new viewProperty();
		viewPropertyObj.viewProperty();
	});


	router.route('/viewAllProperties', function(){
		//show all the properties added so far
		var viewAllPropertiesObj = new viewAllProperties();
		viewAllPropertiesObj.viewAllProperties();
	});

	router.route('/addProperties', function(){
		PropertyManager.addProperties();
		router.navigate('/viewAllProperties');
	});

	router.start();
});