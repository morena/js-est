'use strict';

define(["jquery", 
	"utilities/compose", 
	"text!/data/formProperties.json", 
	'utilities/randomNumber'], function($, compose, formProperties, randomNumberObj){
	
	var Property = compose({
		size: 0,
		numberOfRooms: 0,
		numberofBedrooms: 0,
		numberOfBathrooms: 0,
		address: null,
		typeOfSale: 'ForSale',
		dateAdded: null,
		title: null,
		propertyType: null,
		formProperties:[],

		initialise: function(){
			this.setData();
		},

		setData: function(){
			var self = this;
			this.getData(function(data){
				self.formProperties = data;
			});

		},

		getData: function(callback){
			var self = this;
			callback($.parseJSON(formProperties));
		},

		generateProperty: function(){
			var property = {},
				randomNumber = randomNumberObj.uniqueId(),
				props = $.parseJSON(formProperties);
			for(var key in props){
				for(var key1 in props[key]){
					var propertyDetails = props[key][key1],
						fieldName = propertyDetails.name,
						value = propertyDetails.default;
					if(value == undefined){
						for (var i = 0; i < propertyDetails.options.length; i++){
							if(propertyDetails.options[i].default == 1){
								value = propertyDetails.options[i].optionName;
							}
						}
						property[fieldName] = value;
					}else{
						property[fieldName] = value+randomNumber;
					}
				}
			}
			property["propertyType"] = 'Flat';

			return property;
		}
	});

	return Property;
});