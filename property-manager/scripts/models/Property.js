'use strict';

define(["jquery", "../utilities/compose"], function($, compose){
	
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

			$.ajax({
				url: "../../data/formProperties.json", 
				dataType: 'text'
			}).done(function(data) {
				callback($.parseJSON(data));
			}).fail(function(error){
				console.log(error);
			});
		}


	});

	return Property;
});