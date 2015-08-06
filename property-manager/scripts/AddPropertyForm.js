define(['validator', 'propertyManager', 'mustache', 'House'], 
	function(validator, propertyManager, Mustache, House){
	
	var AddPropertyForm = compose(validator, {
		initialise: function($el){
			//validator.prototype.initialise.apply(this, $el);

			this.$divToPopulate = $(".formInner",$el);

			this.on('validate', this.validationHandler);
			
			//this.off('validate', this.validationHandler);

			this.populateForm($el);
		},

		//custom validator handler!
		validationHandler: function(isValid, property){
			PropertyManager = new propertyManager();

			if(isValid === true){
				PropertyManager.add(property);
				console.log(PropertyManager.getProperties());
			}

		},

		populateForm: function($el){
			var self = this;

			$.when($.ajax({url: "../data/fieldTemplate.mst", dataType: 'text'}))
			.done(function(template){
				var house = new House();

				console.log(house);

				console.log(house.getData());

				var formProperties2 = house.formProperties,
					allFormProperties = [];

					console.log(formProperties2);

				Mustache.parse(template);

				for (var i = 0; i < formProperties2.length; i++) {
					for(key in formProperties2[i]){
						allFormProperties.push(formProperties2[i][key]);
					}
				};

				allFormProperties = allFormProperties.reverse();

				for (var i = 0; i < allFormProperties.length; i++) {
					var field = allFormProperties[i],
						rendered = Mustache.render(template, {field:field});
					
					self.$divToPopulate.prepend(rendered);	
				};

				//running this again to pick up on new dom fields added dynamically
				//probably not the best of ways...
				validator.prototype.initialise.apply(self, $el);
			})
			.fail(function(){
				alert("Sorry there was an error.");
			});


			
		}
	});

	return AddPropertyForm;
});