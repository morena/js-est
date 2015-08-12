define([], function(){
	var PropertyManager = function(){

	};

	PropertyManager.prototype = {
		properties: {},

		add: function(property){
			var id = this.generateRandomID();
			if(this.properties[id]){
				this.add(property);
			}else{
				this.properties[id] = property;
			}
		},

		getProperties: function(){
			return this.properties;
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