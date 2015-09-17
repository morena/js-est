define(['jquery','mustache', '../utilities/randomNumber'], function($, Mustache, randomNumber){
	var PropertyManager = {
		properties: {},

		latestPropertyAddedId: 0,

		add: function(property){
			var id = randomNumber.generateRandomN();
			if(this.properties[id]){
				this.add(property);
			}else{
				this.properties[id] = property;
			}

			this.latestPropertyAddedId = id;
		},

		getProperties: function(){
			return this.properties;
		},

		removeProperty: function(propertyId){
			var self = this;

			if(!undefined === property){
				var property = this.properties[propertyId];
			}else{
				var latestPropertyAddedId = this.latestPropertyAddedId;
			}

			delete this.properties[latestPropertyAddedId];

			console.log(this.properties);


			$(self.divForSingle).html("");

		}
	};

	return PropertyManager;
});