define(['jquery','mustache'], function($, Mustache){
	var PropertyManager = {
		properties: {},

		view: $('#viewContainer'),

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

		viewAllProperties: function(){
			self = this;
			$.when($.ajax({url: "../data/propertyTemplate.mst", dataType: 'text'}))
			.done(function(template){
				
				Mustache.parse(template);

				for( var key in self.properties){
					var property = self.properties[key];
					rendered = Mustache.render(template, {property:property});
					$(self.view).html("");
					$(self.view).append('<h2>List of all properties added</h2>');
					$(self.view).append(rendered);
				}
					
				
			})
			.fail(function(){
				alert("Sorry there was an error.");
			});
		},

		showProperty: function(propertyId){
			var self = this,
				propertyId = propertyId || this.latestPropertyAddedId,
				property = this.properties[propertyId];

			$.when($.ajax({url: "../data/propertyTemplate.mst", dataType: 'text'}))
				.done(function(template){
					
					Mustache.parse(template);

					rendered = Mustache.render(template, {property:property});
					$(self.view).html("");
					$(self.view).append('<h2>Latest property added</h2>');
					$(self.view).append(rendered);
					
				})
				.fail(function(){
					alert("Sorry there was an error.");
			});

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