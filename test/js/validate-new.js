'use strict';

var Validator = function($form){
	this.$form = $form;
	
	this.initialise();
};

//in prototype we'll have properties and methods which we can reuse in any inheriting obejcts
Validator.prototype = {
	//establish the rules for validating the fields
	rules: {
		alphanumeric: function($textField){

			return !!$textField.val().match(/^[a-z\d\s]+$/);
		},
		checkbox: function($checkbox){
			return $checkbox.prop('checked');
		},
		radio: function($radio){
			var anyCheckBoxChecked = false;
			$radio.each(function(){
				if($(this).prop('checked') === true){
					anyCheckBoxChecked =  true;
					return false;
				}
			});

			return anyCheckBoxChecked;
		},
		select: function($select){

			return $select.val().length;
		}
	},

	initialise: function(){
		this.$questions = this.$form.find('div.question');
	},

	validate: function(){
		var rules = this.rules,
			fieldsWithErrors = new Object(),
			allValid = true;

		this.$questions.each(function(i){
			var	$question = $(this),
				type = $question.data('validationType'),
				$field = $question.find("input,select"),
				$errorField = $question.find(".error"),
				valid = rules[type]($field);

			if(valid){
				//remove the error if already showing
				$errorField.hide();
			}else{
				$errorField.show();
				allValid = false;
			}
			
		});

		return allValid;
	}

};

var DataPopulator = function($divToPopulate){
	this.$divToPopulate = $divToPopulate;
};

DataPopulator.prototype = {

	makeRequest: function(){

		var dataPopulator = this;

		$.when($.ajax({url: "../data/template.mst", dataType: 'text'}),$.ajax({url: "../data/test.json"}))
		.done(function(template, data){
			dataPopulator.populateData(template[0], data[0].panels);
		})
		.fail(function(){
			alert("Sorry there was an error.");
		});
	},

	populateData: function(template, panels){
		Mustache.parse(template);
		var rendered = Mustache.to_html(template, {panels:panels});
		this.$divToPopulate.append(rendered);
	}

};



$(document).ready(function(){

	var validator = new Validator($('#testForm'));

	//where would it be the best place for this code? I could not decide
	validator.$form.$submitBtn = validator.$form.find("input[type=submit]");
	validator.$form.$submitBtn.click(function(e){
		e.preventDefault();
		var isFormValid = validator.validate();

		if(isFormValid === true){
			var dataPopulator = new DataPopulator($("#results"));
			dataPopulator.makeRequest();
		}
	})

});
