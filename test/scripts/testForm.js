define(['./Validator', './DataPopulator'],function(Validator, DataPopulator){

	var TestForm = compose(Validator, {
		initialise: function($el){
			Validator.prototype.initialise.apply(this, $el);
			$($el).css('color', 'pink');

			this.on('validate', this.validationHandler);

			this.off('validate', this.validationHandler);
		},

		//custom validator handler!
		validationHandler: function(){
			var dataPopulator = new DataPopulator($('#results'));
			dataPopulator.makeRequest();
		}

	});

	return TestForm;

})