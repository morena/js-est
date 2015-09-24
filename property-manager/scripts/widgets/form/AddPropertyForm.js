'use strict';

define(['./validator', 
		'../../models/PropertyManager', 
		'mustache', '../../models/House', 
		"../../utilities/router", 
		"jquery",
		"../../utilities/randomNumber",
		"../../utilities/compose", 
		'text!/data/fieldTemplate.mst'], 
	function(Validator, PropertyManager, Mustache, House, router, $, randomNumber, compose, fieldTemplate){
	
	var AddPropertyForm = compose(Validator, {
		
		$divToPopulate: null,

		initialise: function($el){
			this.$el = $el;
			//Validator.prototype.initialise.apply(this, $el);

			this.populateForm($el);

			this.on('validate', this.validationHandler);

			this.postRender();
		},

		//custom Validator handler!
		validationHandler: function(isValid, formData){
			var property = formData;

			if(isValid === true){
				PropertyManager.add(property);

				router.navigate('added');
			}

		},

		populateForm: function(){
			var self = this,
				$el = this.$el,
				output = '',
				house = new House(),
				allFormProperties = [];
			
			this.$divToPopulate = $(".formInner",$el);

			Mustache.parse(fieldTemplate);

			house.getData(function(formProperties2){

				for (var i = 0; i < formProperties2.length; i++) {
					for(var key in formProperties2[i]){
						allFormProperties.push(formProperties2[i][key]);
					}
				};

				allFormProperties = allFormProperties.reverse();

				for (var i = 0; i < allFormProperties.length; i++) {
					var field = allFormProperties[i],
						rendered = Mustache.render(fieldTemplate, {field:field});
					output+= rendered;
					
				};
				
				self.$divToPopulate.prepend(output);	

				//running this again to pick up on new dom fields added dynamically
				//probably not the best of ways...
				//Validator.prototype.initialise.apply(this, $el);
				self.postRender();

			});

		},

		manageFields: function(value, $el){
			//on toggling the value of the radio button for propertyType
			if(value == 'flat'){
				$("[data-flat]", $el).addClass("hidden").attr("data-validate", false);
			}else{
				$("[data-flat]", $el).removeClass("hidden").attr("data-validate", false);
			}
		},

		postRender: function(){
			var self = this,
				validator = new Validator(),
				$el = self.$el;

			validator.postRender($el);

			self.$formWrapper = $(".formContent",$el);
			
			$(".propertyType", $el).change(function(){
				self.manageFields($(this)[0].value, $el);
			});

			$('.auotPopulateForm').on("click", function(event){
				self.autoPopulateForm(event);
			});

		},

		autoPopulateForm: function(event){
			var self = this,
				randomN = randomNumber.generateRandomN();
			event.preventDefault();
			$(self.$el.find(".question")).each(function(){
				var $field = $(this).find("input[data-hw-default],select[data-hw-default],textarea[data-hw-default]"),
					defaultValue = $field.attr("data-hw-default"),
					currentValue = $field.val();

				if(currentValue == ""){
					$field.val(defaultValue+randomN);
				}else{
					if(defaultValue === 'true'){
						$field.attr("checked", "checked");
					}
				}
			});
		},
	});

	return AddPropertyForm;
});