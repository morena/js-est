define(['jquery', 'mustache'], function($, Mustache){
	var form = {
		
		$el: null,

		populateForm: function(){
			var self = this;

			return $.ajax({url: "../data/form.mst", dataType: 'text'})
			.done(function(formTemplate){
				
				Mustache.parse(formTemplate);
				
				var formRendered = Mustache.render(formTemplate);
				
				$('#viewContainer').html(formRendered);	

				self.$el = $('form');
			})


			.fail(function(){
				alert("Sorry there was an error.");
			});
		},
	}

	return form;
});