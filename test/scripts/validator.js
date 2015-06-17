define( function(){

	return{

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

		initialise: function($form){
			this.$form = $form;
			this.$questions = $form.find('div.question');
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

	}
})
