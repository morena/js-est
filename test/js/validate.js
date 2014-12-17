function validateForm(){

	var isTextFieldValid = true;
	var isDropdownValid = false;

	//validate the text input
	$("#testForm input[type=text]").blur(function(){
		//capture the value
		var field = $(this);
		//set up the pattern
		var pattern = new RegExp(/[^(\d\w\s)]/g);
		//set up the error message
		var errorMsg = 'You must only enter alpha, numeric, or whitespace characters.';

		//validate
		isTextFieldValid = validateField(field, pattern, errorMsg);
	});

	//validation on submit
	$("#testForm input[type=submit]").click(function(e){
		//prevent the form from submitting
		e.preventDefault();
		
		//check the checkbox has been ticked
		var $checkbox = $("#testForm input[type=checkbox]");
		var isCheckboxChecked = $checkbox.prop('checked');
		var errorMsg = 'You must tick this checkbox.';

		if( isCheckboxChecked === false){
			appendErrorMsg($checkbox, errorMsg);
		}else{
			removeErrors($checkbox);
		}

		//check if at least one of the radio button has been selected
		var isRadioBtnChecked = false;
		var $radioField = $("#testForm input[type=radio]");

		$("#testForm input[type=radio]").each(function(){
			if($(this).prop('checked') === true){
				//if so we want to set our flag to true
				isRadioBtnChecked = true;
			}
		});

		//if the flag is still set to false
		//we want to report the error
		if( isRadioBtnChecked === false){
			errorMsg = 'You must select at least one radio button.';
			appendErrorMsg($radioField, errorMsg);
		}else{
			//otherwise remove it
			removeErrors($radioField);
		}

		//validate the dropdown
		//if the value of the field is nothing/no value
		//we report the error
		var dropdownField = $("#testForm select");
		if(!$("#testForm select").val()){
			errorMsg = "You must select an option";
			appendErrorMsg(dropdownField, errorMsg);
		}else{
			removeErrors(dropdownField);
			isDropdownValid = true;
		}


		//if all the fields are valid
		if(isTextFieldValid === true 
			&& isCheckboxChecked === true 
			&& isRadioBtnChecked === true 
			&& isDropdownValid){	
			//make the ajax request
			$.ajax({
				type: "GET",
				dataType: "json",
				url: "../data/test.json"
			})
			.done(function(data){
				populateData(data.panels);
			})
			.fail(function(){
				alert("Sorry there was an error.");
			});
		}else{
			alert("Please correct errors in the form before submitting it.");
		}

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
    	return false;
    }else{
    	//remove any existing errors
    	removeErrors(field);
    	return true;
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

function populateData(panels){
	//iterate through the array of panels
	$.each(panels, function(k, v){
		links = '';
		//iterate through the links
		$.each(v.links, function(l, b){
			links += '<li><a href="'+b.url+'">'+b.title+'</a></li>';
		});
		//for each panel add a .resultItem within #results
		//ideally by populating a template and not just assembling HTML this way..
		$("#results").append('<div class="resultItem"><h3>Panel '+v.id+'</h3><p>'+v.desc+'</p><ul>'+links+'</ul></div>');
	});
}




$(document).ready(function(){
	validateForm();
});