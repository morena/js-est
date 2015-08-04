define(['validator', 'propertyManager'], function(validator, propertyManager){
	
	var AddPropertyForm = compose(validator, {
		initialise: function($el){
			validator.prototype.initialise.apply(this, $el);

			this.on('validate', this.validationHandler);
			
			//this.off('validate', this.validationHandler);
		},

		//custom validator handler!
		validationHandler: function(){
			if(arguments){
				var property = arguments[1],
					PropertyManager = new propertyManager();

				PropertyManager.add(property);

				console.log(PropertyManager.getProperties());
			}
		}
	});

	return AddPropertyForm;
});