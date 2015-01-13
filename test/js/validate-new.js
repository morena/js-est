var Validator = function($form){
	this.$form = $form;
	
	this.initialise();
};

//in prototype we'll have properties and methods which we can reuse in any inheriting obejcts
Validator.prototype = {
	//establish the rules for validating the fields
	rules: {
		alphanumeric: function($textField){
			var value = $textField.val(),
				pattern = new RegExp(/[^a-zA-Z0-9\d\s]/g);
			
			var invalidChars = pattern.test(value);
			//this
			return !invalidChars;
		},
		checkbox: function($checkbox){
			return $checkbox.prop('checked');
		},
		radio: function($radio){
			var anyCheckBoxChecked = false;
			$radio.each(function(){
				if($(this).prop('checked') === true){
					anyCheckBoxChecked =  true;
				}
			});

			return anyCheckBoxChecked;
		},
		select: function($select){
			if($select.val().length == 0){
				return false;
			}
		}
	},

	initialise: function(){
		this.$questions = this.$form.find('div.question');
	},

	validate: function(){
		var rules = this.rules,
			formValid = true,
			fieldsWithErrors = [];

		this.$questions.each(function(){
			var $question = $(this),
				type = $question.data('validationType'),
				$field = $question.find("input,select"),
				$errorField = $question.find(".error"),
				valid = rules[type]($field);

			//could I move this into a separate function?
			//how would I handle the setting of formValid?
			if(!valid){
				formValid = false;

				//add field to array of errors to show
				fieldsWithErrors.push($errorField);
			}else{
				//remove the error if already showing
				$errorField.hide();
				fieldsWithErrors.splice($errorField);
			}
			
		});

		//console.log(fieldsWithErrors);

		if(formValid){
			//make ajax call
		}else{
			//check what fields are still invalid
			//and show and hide error messages where needed
			for (var i = 0; i < fieldsWithErrors.length; i++) {
				fieldsWithErrors[i].show();
			};
		}
	}

};

$(document).ready(function(){

	var validator = new Validator($('#testForm'));


	//where would it be the best place for this code? I could not decide
	validator.$form.$submitBtn = validator.$form.find("input[type=submit]");

	validator.$form.$submitBtn.click(function(e){
		e.preventDefault();
		validator.validate();
	})

});
