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
			/*var value = $textField.val(),
				pattern = new RegExp(/[^a-zA-Z0-9\d\s]/g);

			//check the field is not empty
			if(value.length === 0){
				return false;
			}
			var invalidChars = pattern.test(value);
			//this is bad, I know but is there a better way?
			return !invalidChars;*/

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
			/*if($select.val().length === 0){
				return false;
			}else{
				return true;
			}*/

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

	getMarkup: function(callback){
		//get the markup template file
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "../data/template.html"
		})
		.done(function(data){
		 	callback(data);
		})
		.fail(function(){
			alert("Sorry there was an error.");
		});
	},

	makeRequest: function(){

		var dataPopulator = this;

		/*$.ajax({
			type: "GET",
			dataType: "json",
			url: "../data/test.json"
		})
		.done(function(data){
			//we get the div template
			//console.log(dataPopulator.getMarkup());
			dataPopulator.getMarkup(function(divTemplate){
				dataPopulator.populateData(divTemplate, data.panels);
			});

		})
		.fail(function(){
			alert("Sorry there was an error.");
		});*/


		//multiple ajax requests
		$.when($.ajax({url: "../data/test.json"}),$.ajax({url: "../data/template.mst"}))
		.done(function(data, divTemplate){
			dataPopulator.populateData(divTemplate, data[0].panels);
		})
		.fail(function(){
			alert("Sorry there was an error.");
		});
	},

	populateData: function(divTemplate, panels){
		//save each item to populate
		var titleFromTemplate,
			descFromTemplate,
			ulFromTemplate,
			titleFromPanel,
			descFromPanel,
			populatedLinks,
			divToPopulate = this.$divToPopulate,
			rendered,
			text;

		//iterate through the array of panels
		$.each(panels, function(k, v){ //this is the jQuery each

			//$(divToPopulate).append(divTemplate);

			//select the item that corresponds to each of the previous items
			/*titleFromTemplate =  $(divToPopulate).children().last("div").find(".title");
			descFromTemplate =  $(divToPopulate).children().last("div").find(".desc");
			ulFromTemplate =  $(divToPopulate).children().last("div").find(".links");

			//save each item to populate

			titleFromPanel = "Panel"+v.id;
			descFromPanel = v.desc;
			populatedLinks = '';

			//iterate through the links and put them together into an <ul>
			$.each(v.links, function(l, b){
				populatedLinks += '<li><a href="'+b.url+'">'+b.title+'</a></li>';
			});

			$(titleFromTemplate).html(titleFromPanel);
			$(descFromTemplate).html(descFromPanel);
			$(ulFromTemplate).html(populatedLinks);*/

			//Mustache.js version
			text = {
				titleFromPanel: "Panel"+v.id,
				descFromPanel: v.desc
			};

			$(divToPopulate).append('<div class="resultItem" id="'+k+'"></div>');

			rendered = Mustache.to_html(divTemplate, text);

			$('#'+k).html(rendered);

		});
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
