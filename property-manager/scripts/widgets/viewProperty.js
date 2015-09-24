'use strict';

define(["jquery", 
	"mustache", 
	"models/PropertyManager", 
	"widgets/propertyDisplayer",
	'utilities/compose'], 

	function($, Mustache, PropertyManager, propertyDisplayer, compose){
	
		var viewProperty = compose(propertyDisplayer, {

			view: $('#viewContainer'),

			viewProperty: function(propertyId){
				var self = this,
					propertyId = propertyId || PropertyManager.latestPropertyAddedId,
					property = PropertyManager.properties[propertyId];

				this.getPropertyTemplate(function(template){
					Mustache.parse(template);

					var rendered = Mustache.render(template, {property:property});
					$(self.view).html("");
					$(self.view).append('<h2>Latest property added</h2>');
					$(self.view).append(rendered);
				});

			}
	});

	return viewProperty;
});