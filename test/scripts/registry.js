define([], function(){

	var cache = {};

	return {

		register: function($el, instance){
			var id = $el.attr("id");

			cache[id] = instance;
		},

		get: function(id){
			return cache[id] || null;
		}

	};
});