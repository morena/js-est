define(['./Validator', './DataPopulator'],function(Validator, DataPopulator){

	var TestForm = compose(Validator, {
		initialise: function($el){
			Validator.prototype.initialise.apply(this, $el);
			$($el).css('color', 'pink');

			this.on('validate', this.validationHandler);
			
			this.on('validate', this.validationHandler2);

			//this.off('validate', this.validationHandler);
		},

		//custom validator handler!
		validationHandler: function(){
			var dataPopulator = new DataPopulator($('#results'));
			dataPopulator.makeRequest();
		},
		//custom validator handler!
		validationHandler2: function(){
			console.log("hello");
		}

	});

	return TestForm;

})