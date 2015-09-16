define(['./validator', '../../models/PropertyManager', 'mustache', '../../models/House', "../../utilities/router", "jquery"], 
	function(Validator, PropertyManager, Mustache, House, router, $){
	
	var AddPropertyForm = compose(Validator, {
		
		$divToPopulate: null,

		initialise: function($el){
			var self = this;
			
			this.$el = $el;
			//Validator.prototype.initialise.apply(this, $el);

			this.populateForm($el);

			self.on('validate', self.validationHandler);

			self.postRender();
		},

		//custom Validator handler!
		validationHandler: function(isValid, self){
			var property = self.formData;

			if(isValid === true){
				PropertyManager.add(property);

				router.navigate('added');
			}

		},

		populateForm: function(){
			var self = this,
				$el = this.$el;

			$.when($.ajax({url: "../data/fieldTemplate.mst", dataType: 'text'}))
			.done(function(template){
				var house = new House(),
					allFormProperties = [];
				
				self.$divToPopulate = $(".formInner",$el);

				Mustache.parse(template);

				house.getData(function(formProperties2){

					for (var i = 0; i < formProperties2.length; i++) {
						for(key in formProperties2[i]){
							allFormProperties.push(formProperties2[i][key]);
						}
					};

					allFormProperties = allFormProperties.reverse();

					for (var i = 0; i < allFormProperties.length; i++) {
						var field = allFormProperties[i],
							rendered = Mustache.render(template, {field:field});
						
						self.$divToPopulate.prepend(rendered);	
					};

					//running this again to pick up on new dom fields added dynamically
					//probably not the best of ways...
					//Validator.prototype.initialise.apply(self, $el);
					self.postRender();

				});
			})
			.fail(function(){
				alert("Sorry there was an error.");
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
				validator = new Validator();
			$el = this.$el;

			validator.postRender($el);

			self.$formWrapper = $(".formContent",$el);
			
			$(".propertyType", $el).change(function(){
				self.manageFields($(this)[0].value, $el);
			});

		}
	});

	return AddPropertyForm;
});