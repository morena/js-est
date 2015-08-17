define(['validator', 'propertyManager', 'mustache', 'House', "router", "jquery"], 
	function(validator, propertyManager, Mustache, House, router, $){
	
	var AddPropertyForm = compose(validator, {
		initialise: function($el){
			var self = this;
			//validator.prototype.initialise.apply(this, $el);

			this.$divToPopulate = $(".formInner",$el);

			this.on('validate', this.validationHandler);
			
			//this.off('validate', this.validationHandler);

			$(".propertyType", $el).change(function(){
				self.manageFields($(this)[0].value, $el);
			})

			this.populateForm($el);

			this.manageNavLinks();
		},

		//custom validator handler!
		validationHandler: function(isValid, self){
			var property = self.formData;

			PropertyManager = new propertyManager();

			if(isValid === true){
				router.clickManager('/add', property, function(){

					PropertyManager.add(property);
					PropertyManager.showProperty();

				});

				/*//if user navigates away
				window.addEventListener('popstate', function(event){
					var state = event.state;
					console.log(state);
					console.log(history);
					PropertyManager.removeProperty(property);
				});*/
			}

		},

		populateForm: function($el){
			var self = this;

			$.when($.ajax({url: "../data/fieldTemplate.mst", dataType: 'text'}))
			.done(function(template){
				var house = new House(),
					allFormProperties = [];

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
					validator.prototype.initialise.apply(self, $el);

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

		manageNavLinks: function(){
			$("nav ul li a").each(function(){
				$(this)[0].addEventListener("click", function (event) {
					event.preventDefault();
					var url = $(this).attr("href"),
						module = $(this).data('hw-router-module');

					console.log(module);

					router.clickManager(url, module);
				})
			})
		}
	});

	return AddPropertyForm;
});