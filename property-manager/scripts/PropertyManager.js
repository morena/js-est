define([], function(){
	var PropertyManager = function(){

	};

	PropertyManager.prototype = function(){
		properties: {},

		add: function(property){
			var id = Math.random();
			properties[id] = property;
		}
	};

	return PropertyManager;
});