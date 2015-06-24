'use strict';
/*define(['jquery', 'validator', 'dataPopulator'], function ($, Validator, DataPopulator) {
    
    $(document).ready(function(){
		
		var validator = new Validator($('#testForm'));

    	validator.$form.$submitBtn = validator.$form.find("input[type=submit]");

		validator.$form.$submitBtn.click(function(e){
			e.preventDefault();
			var isFormValid = validator.validate();

			if(isFormValid === true){
				var dataPopulator = new DataPopulator($('#results'));
				dataPopulator.makeRequest();
			}
		})

	});
});*/

define(['parser', 'registry'], function(parser, registry){

	parser.parse(function(){
		console.log(registry.get('results'));

		/*var dataPopulator = new DataPopulator(),
			validator = registry.get('validator');

		validator.on('validate', function(isValid){
			if(isValid){
				dataPopulator.makeRequest();
			}
		});*/

	});
	
});