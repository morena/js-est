define(['jquery','mustache'], function($, Mustache){
	var PropertyManager = function(){

	};

	PropertyManager.prototype = {
		properties: {},

		divForList: $('#propertySingle'),

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

		showProperty: function(propertyId){
			var self = this;

			if(!undefined === property){
				var property = this.properties[propertyId];
			}else{
				var latestPropertyAddedId = this.latestPropertyAddedId,
					property = this.properties[latestPropertyAddedId];
			}

			//console.log(latestPropertyAddedId);
			//console.log(property);

			$.when($.ajax({url: "../data/propertyTemplate.mst", dataType: 'text'}))
				.done(function(template){
					
					Mustache.parse(template);
					
					rendered = Mustache.render(template, {property:property});

					console.log(self.divForList);
					
					$(self.divForList).prepend(rendered);	
					
				})
				.fail(function(){
					alert("Sorry there was an error.");
			});

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