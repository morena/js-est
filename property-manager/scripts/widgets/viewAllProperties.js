'use strict';

define(["jquery", 
	"mustache",
	"../models/PropertyManager", 
	'./propertyDisplayer', 
	'../utilities/compose'], 

	function($, Mustache, PropertyManager, propertyDisplayer, compose){

		var viewAllProperties = compose(propertyDisplayer, {

			view: $('#viewContainer'),

			viewAllProperties: function(){
				var self = this;

	 			this.getPropertyTemplate(function(template){
					Mustache.parse(template);

					$(self.view).html("");
					$(self.view).append('<h2>List of all properties added</h2>');

					for( var key in PropertyManager.properties){
						var property = PropertyManager.properties[key],
							rendered = Mustache.render(template, {property:property});
						$(self.view).append(rendered);
					}
				});
			}
		});

		return viewAllProperties;
});