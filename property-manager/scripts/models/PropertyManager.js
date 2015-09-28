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
			console.log(this.properties);
		},

		getProperties: function(){
			return this.properties;
		},

		removeProperty: function(propertyId){
			var self = this;

			if(undefined !== property){
				var property = this.properties[propertyId];
			}else{
				var latestPropertyAddedId = this.latestPropertyAddedId;
			}

			delete this.properties[latestPropertyAddedId];

			$(self.divForSingle).html("");

		}
	};

	return PropertyManager;
});