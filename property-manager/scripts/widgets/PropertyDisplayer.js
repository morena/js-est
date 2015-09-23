'use strict';

define(["jquery", "mustache", "../models/PropertyManager", '../utilities/compose'], function($, Mustache, PropertyManager, compose){
	var propertyDisplayer = compose({

 		propertyTemplate: null,

 		initialise: function(){
			console.log("morens");
		},

 		getPropertyTemplate: function(callback){
 			var self = this;

 			if(this.propertyTemplate){
 				callback(this.propertyTemplate);
 			}else{
				//$.when is only for multiple ajax calls
				$.ajax({url: "../../data/propertyTemplate.mst", dataType: 'text'})
				.done(function(template){
					
					Mustache.parse(template);

					self.propertyTemplate = template;

					callback(template);
						
				})
				.fail(function(){
					alert("Sorry there was an error.");
				});
			}
 		}
	});

	return propertyDisplayer;
});