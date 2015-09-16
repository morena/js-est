define(['jquery','mustache'], function($, Mustache){
	var PropertyManager = {
		properties: {},

		latestPropertyAddedId: 0,

		add: function(property){
			var id = this.generateRandomID();
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

		},

		generateRandomID: function(){
			var min = 1,
				max = 1000;
				random = Math.floor(Math.random()* (max-min+1)) + min;

			return random;
		}
	};

	return PropertyManager;
});