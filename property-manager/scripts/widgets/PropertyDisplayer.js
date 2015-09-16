define(["jquery", "mustache", "../models/PropertyManager"], function($, Mustache, PropertyManager){
	var PropertyDisplayer = {

		view: $('#viewContainer'),

		viewAllProperties: function(){
			self = this;
			$.when($.ajax({url: "../data/propertyTemplate.mst", dataType: 'text'}))
			.done(function(template){
				
				Mustache.parse(template);

				for( var key in self.properties){
					var property = self.properties[key];
					rendered = Mustache.render(template, {property:property});
					$(self.view).html("");
					$(self.view).append('<h2>List of all properties added</h2>');
					$(self.view).append(rendered);
				}
					
				
			})
			.fail(function(){
				alert("Sorry there was an error.");
			});
		},

		showProperty: function(propertyId){
			var self = this,
				propertyId = propertyId || PropertyManager.latestPropertyAddedId,
				property = PropertyManager.properties[propertyId];

			$.when($.ajax({url: "../data/propertyTemplate.mst", dataType: 'text'}))
				.done(function(template){
					
					Mustache.parse(template);

					rendered = Mustache.render(template, {property:property});
					$(self.view).html("");
					$(self.view).append('<h2>Latest property added</h2>');
					$(self.view).append(rendered);
					
				})
				.fail(function(){
					alert("Sorry there was an error.");
			});

		},
	};

	return PropertyDisplayer;
});