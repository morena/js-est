function validateForm(){

	var isFormValid = true;

	//validate the  text input
	//when the mouse moves out of the field
	$("#testForm input[type=text]").blur(function(){
		//capture the value
		field = $(this);
		//set up the pattern
		pattern = new RegExp(/[^(\d\w\s)]/g);
		//set up the error message
		error = 'You must only enter alpha, numeric, or whitespace characters.';

		//validate
		validateField(field, pattern, errorMsg);
	});

	//validation on submit
	$("#testForm input[type=submit]").click(function(e){
		//prevent the form from submitting
		e.preventDefault();
		
		//check the checkbox has been ticked
		checkbox = $("#testForm input[type=checkbox]");
		var isCheckboxChecked = checkbox.prop('checked');
		if( isCheckboxChecked === false){
			errorMsg = 'You must tick this checkbox.';
			appendErrorMsg(checkbox, errorMsg);
		}else{
			removeErrors(checkbox);
		}

		//check one of the radio button has been selected
		var isRadioBtnChecked = false;
		radioBtns = $("#testForm input[type=radio]");
		//just a placeholder where to add the error message if the field is not filled
		var field = radioBtns;
		radioBtns.each(function(){
			if($(this).prop('checked') === true){
				field = $(this);
				isRadioBtnChecked = true;
			}
		});
		if( isRadioBtnChecked === false){
			errorMsg = 'You must select at least one radio button.';
			appendErrorMsg(field, errorMsg);
		}else{
			removeErrors(field);
		}

		//validate the dropdown
		var selectField = $("#testForm #select")
		var selectFieldValue = selectField.val();
		if(selectFieldValue.length == 0){
			errorMsg = 'You must select an option from the dropdown.';
			appendErrorMsg(selectField, errorMsg);

		}else{
			removeErrors(selectField);
		}

		console.log(isFormValid);

	});

}

function validateField(field, pattern, errorMsg){
	var value = field.val();
	
	//test the value against our regex pattern
	//could use jQuery Validate plugin http://jqueryvalidation.org/
    var hasIllegalChars = pattern.test(value);

    //if we have illegal characters we then report it
    if(hasIllegalChars){
    	appendErrorMsg(field, errorMsg);
    	field.focus();
    	isFormValid = true;
    }else{
    	//remove any existing errors
    	removeErrors(field);
    }

}

function appendErrorMsg(field, errorMsg){
    removeErrors(field);
	//add error message to the end of the containing div
	field.parent().append('<span class="error">'+errorMsg+'</span>');

}

function removeErrors(field){
    var parent = field.parent();
    //remove any existing errors
	$('.error', parent).remove();
}




$(document).ready(function(){
	validateForm();
});