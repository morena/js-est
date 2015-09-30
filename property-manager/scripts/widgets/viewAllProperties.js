'use strict';

define(["jquery", 
	"mustache",
	"models/PropertyManager", 
	'widgets/propertyDisplayer', 
	'utilities/compose',
	'widgets/Filter',
	'text!/templates/filterWrapper.mst'], 

	function($, Mustache, PropertyManager, propertyDisplayer, compose, Filter, filterWrapper){

		var viewAllProperties = compose(propertyDisplayer, {

			view: $('#viewContainer'),
			removeBtn: $(".removeProperty"),

			viewAllProperties: function(){
				var self = this,
					output = '',
					propertiesOutput= '';

	 			this.getPropertyTemplate(function(template){
					Mustache.parse(template);

					$(self.view).html("");

					for( var key in PropertyManager.properties){
						var property = PropertyManager.properties[key],
							rendered = Mustache.render(template, {property:property, id:key});
							propertiesOutput+= rendered;
					}

					var filterObj = new Filter($(propertiesOutput)),
						filterContent = filterObj.getRenderedHtml();

					output += Mustache.render(filterWrapper, {content: propertiesOutput, filter: filterContent});

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