'use strict';

define(['jquery',
	'mustache', 
	'utilities/randomNumber',
	'models/Property'], function($, Mustache, randomNumber, Property){

	var PropertyManager = {
		properties: [],

		latestPropertyAddedId: 0,

		add: function(property){
			var id = randomNumber.uniqueId();
			if(undefined == this.properties[id]){
				this.properties[id] = property;
			}
			this.latestPropertyAddedId = id;
		},

		getProperties: function(){
			return this.properties;
		},

		removeProperty: function(propertyId){
			var self = this;
			delete this.properties[propertyId];
		},

		addProperties: function(){
			var propertyObj = new Property();
			for(var i = 0; i < 4; i++){
				var property = propertyObj.generateProperty();
				this.add(property);
			}
		}
	};

	return PropertyManager;
});