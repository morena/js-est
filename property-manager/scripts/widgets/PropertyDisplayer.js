'use strict';

define(["jquery",
	"mustache", 
	"../models/PropertyManager", 
	'../utilities/compose', 
	'text!/data/propertyTemplate.mst'], 
	function($, Mustache, PropertyManager, compose, propertyTemplate){
		var propertyDisplayer = compose({

	 		propertyTemplate: null,

	 		initialise: function(){

			},

	 		getPropertyTemplate: function(callback){
	 			var self = this;

	 			if(this.propertyTemplate){
	 				callback(this.propertyTemplate);
	 			}else{

					Mustache.parse(propertyTemplate);

					self.propertyTemplate = propertyTemplate;

					callback(propertyTemplate);

					//$.when is only for multiple ajax calls
					//$.ajax({url: "../../data/propertyTemplate.mst", dataType: 'text'})
					
				}
	 		}
	});

	return propertyDisplayer;
});