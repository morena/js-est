'use strict';

define(['jquery','mustache', 'utilities/randomNumber'], function($, Mustache, randomNumber){

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

			console.log(this.properties);
			delete this.properties[propertyId];
			console.log(this.properties);

		}
	};

	return PropertyManager;
});