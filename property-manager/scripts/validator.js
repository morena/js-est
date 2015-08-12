define(['jquery', 'events'], function($, events){
	var Validator = compose(events, {
		
		initialise: function(form){
			this.$form = $(form);
			this.$questions = this.$form.find('div.question');
			this.$form.$submitBtn = this.$form.find("input[type=submit]");
			this.bindEvents();
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

		addToFormData: function(field, data){
			this.formData[field] = data;
		},

		bindEvents: function(){

			var self = this;

			this.$form.submit(function(e){
				e.preventDefault();
				self.evaluateForm();
			});
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

					console.log(fieldName, type, validate);


					if(validate === true){
						valid = rules[type]($field);
					}
					console.log(valid);

					validator.addToFormData(fieldName, value);

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
			var isFormValid = this.validateForm();

			this.trigger('validate', isFormValid, this);
		},
	});

	

	//returning the constructor

	//we return Validator as a constructor, not an object and not a function 
	//because we want to instantiate the object only when we need it 
	//and call necessary functions when we need them
	//we don't want to instantiate the object by default in each module
	return Validator;
})
