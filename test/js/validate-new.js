var Validator = function($form){
	this.$form = $form;
	
	this.initialise();
};

Validator.prototype = {
	//establish the rules
	rules{
		alphanumeric: function(value){
			pattern = new RegExp(/[^(\d\w\s)]/g);
			return pattern.test(value);
		},
		checkbox: function($checkbox){
			return $checkbox.prop('checked');
		},
		radio: function($radio){
			$radio.each(function(){
				if($(this).prop('checked') === true){
					return 
				}
			});
		}
	}
};