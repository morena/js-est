'use strict';

define(['jquery', 'mustache', 'text!/templates/form.mst'], function($, Mustache, formTemplate){
	var form = {
		
		$el: null,

		populateForm: function(){
			var self = this,
			formRendered = Mustache.render(formTemplate);

			Mustache.parse(formTemplate);
			
			$('#viewContainer').html(formRendered);	

			self.$el = $('form');

		}
	}

	return form;
});