'use strict';
define(['jquery', 'mustache', './validator', './dataPopulator'], function ($, mustache, validator, dataPopulator) {
    
    $(document).ready(function(){

		validator.initialise($('#testForm'));

		validator.$form.$submitBtn = validator.$form.find("input[type=submit]");

		validator.$form.$submitBtn.click(function(e){
			e.preventDefault();
			var isFormValid = validator.validate();

			if(isFormValid === true){
				dataPopulator.initialise($("#results"));
				dataPopulator.makeRequest();
			}
		})

	});
});