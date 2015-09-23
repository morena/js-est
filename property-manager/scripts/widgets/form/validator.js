'use strict';

define(['jquery', '../../utilities/events', "../../utilities/compose"], function($, events, compose){
	var Validator = compose(events, {
		
		initialise: function(form){
			this.postRender(form);
		},

		formData: {},

		rules: {
			alphanumeric: function($textField){
				return !!$textField.val().match(/[a-zA-Z\d\s]+$/);
			},
			numeric: function($textField){
				return !!$textField.val().match(/^\d+$/);
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

		/*addToFormData: function(field, data){
			this.formData[field] = data;
		},*/

		bindEvents: function(){

			var self = this;
			this.$form.off("submit");

			this.$form.on( "submit", function(e){
				e.preventDefault();
				self.evaluateForm();
			});
		},

		getFormData: function(){
			var data = {};

			this.$questions.each(function(){
				$question = $(this),
				$field = $question.find("input,select,textarea"),
				fieldName = $field.attr("name"),
				value = $field.val();

				data[fieldName] = value;
			});

			return data;
		},

		validateForm: function(){
			var rules = this.rules,
				fieldsWithErrors = new Object(),
				allValid = true,
				validator = this;

			this.$questions.each(function(i){
				var	$question = $(this),
					type = $question.data('validationType'),
					$field = $question.find("input,select,textarea"),
					$errorField = $question.find(".error"),
					fieldName = $field.attr("name"),
					validate = $question.data("validate"),
					value = $field.val(),
					valid = false;


					if(validate === true){
						valid = rules[type]($field);
					}
					//validator.addToFormData(fieldName, value);

				if(valid){
					//remove the error if already showing
					$errorField.hide();
				}else{
					if(validate === true){
						$errorField.show();
						allValid = false;
					}
				}				
			});

			return allValid;
		},
		
		evaluateForm: function(){
			var isFormValid = this.validateForm(),
				formData = this.getFormData();
			this.trigger('validate', isFormValid, formData);
		},

		postRender: function(form){
			this.$form = $(form);
			this.$questions = this.$form.find('div.question');
			this.$form.$submitBtn = this.$form.find("input[type=submit]");
			this.bindEvents();
		}
	});

	

	//returning the constructor

	//we return Validator as a constructor, not an object and not a function 
	//because we want to instantiate the object only when we need it 
	//and call necessary functions when we need them
	//we don't want to instantiate the object by default in each module
	return Validator;
})
