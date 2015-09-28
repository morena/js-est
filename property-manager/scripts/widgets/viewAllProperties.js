'use strict';

define(["jquery", 
	"mustache",
	"models/PropertyManager", 
	'widgets/propertyDisplayer', 
	'utilities/compose'], 

	function($, Mustache, PropertyManager, propertyDisplayer, compose){

		var viewAllProperties = compose(propertyDisplayer, {

			view: $('#viewContainer'),
			removeBtn: $(".removeProperty"),

			viewAllProperties: function(){
				var self = this,
					output = '';

	 			this.getPropertyTemplate(function(template){
					Mustache.parse(template);

					$(self.view).html("");
					$(self.view).append('<h2>List of all properties added</h2>');

					for( var key in PropertyManager.properties){
						var property = PropertyManager.properties[key],
							rendered = Mustache.render(template, {property:property, id:key});
							output+= rendered;
					}
					$(self.view).append(output);

					var $removeBtn= $(".removeProperty");

					$removeBtn.on("click", function(event){
						event.preventDefault();
						var id = $(this).data('id');
						PropertyManager.removeProperty(id);
						self.viewAllProperties();
					});
				});
			}
		});

		return viewAllProperties;
});