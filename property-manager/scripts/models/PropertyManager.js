define(['jquery','mustache', '../utilities/randomNumber'], function($, Mustache, randomNumber){
	var PropertyManager = {
		properties: {},

		latestPropertyAddedId: 0,

		add: function(property){
			//console.log(this.properties);
			var id = randomNumber.generateRandomN();
			//console.log("randomID",id);
			//console.log("is this.properties[id] set?", this.properties[id]);
			/*if(this.properties[id]){
				this.add(property);
			}else{*/
			console.log( (undefined == this.properties[id]) );
			if(undefined == this.properties[id]){
				this.properties[id] = property;
			}
			//}

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