define(['validator', 'propertyManager', 'mustache'], function(validator, propertyManager, Mustache){
	
	var AddPropertyForm = compose(validator, {
		initialise: function($el){
			validator.prototype.initialise.apply(this, $el);

			this.on('validate', this.validationHandler);
			
			//this.off('validate', this.validationHandler);

			this.populateForm();
		},

		//custom validator handler!
		validationHandler: function(isValid, property){
			PropertyManager = new propertyManager();

			if(isValid === true){
				PropertyManager.add(property);
			}

			console.log(PropertyManager.getProperties());
		},

		getFieldTemplate: function(){
			$.when($.ajax({url: "../data/fieldTemplate.mst", dataType: 'text'}))
			.done(function(template){
				return template[0];
			})
			.fail(function(){
				alert("Sorry there was an error.");
			});
		},

		addField: function(field){
			template = getFieldTemplate();
			Mustache.parse(template);

			for(key in this.formProperties){
				var field = this.formProperties[key],
					rendered = Mustache.render(template, {field:field});
				
				this.$divToPopulate.append(rendered);
			}
		}
	});

	return AddPropertyForm;
});