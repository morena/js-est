define([], function(){
	var cache = {};

	return{
		register: function($el, instance){
			var id = $el.attr("id");

			if(undefined == id){
				id = 'data-hw-module-id-'+this.generateRandomID();
				$el.attr("id",id);
			}
			if(cache[id]){
				this.register($el, instance);
			}else{
				cache[id] = instance;
			}

		},

		get: function(id){
			return cache[id] || null;
		},

		generateRandomID: function(){
			var min = 1,
				max = 1000;
				random = Math.floor(Math.random()* (max-min+1)) + min;

			return random;
		}
	}
})