'use strict';

define(["jquery", "utilities/compose", "text!/data/formProperties.json"], function($, compose, formProperties){
	
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
		}


	});

	return Property;
});