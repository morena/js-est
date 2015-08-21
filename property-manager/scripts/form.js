define(['jquery', 'mustache'], function($, Mustache){
	var form = {
		
		$el: null,

		populateForm: function(){
			var self = this;

			$.when($.ajax({url: "../data/form.mst", dataType: 'text'}))
			.done(function(formTemplate){
				
				Mustache.parse(formTemplate);
				
				var formRendered = Mustache.render(formTemplate);
				
				$('.formWrapper').html(formRendered);	
				
				//self.$divToPopulate = $(".formInner",$el);

				console.log($('form'));

				self.$el = $('form');
			})


			.fail(function(){
				alert("Sorry there was an error.");
			});
		},
	}

	return form;
});