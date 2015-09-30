'use strict';

define(['text!/templates/filter.mst',
	'mustache',
	'utilities/compose'], function(filterTemplate, Mustache, compose){
	var Filter = compose({
		
		view: $('#viewContainer'),

		initialise: function($el){
			this.$el = $el;
		},
		
		allNBedrooms: function () {
			var nBedrooms = [],
				currentNBedrooms = 0;

			this.$el.find(".property").each(function(){
				console.log('yo');
				currentNBedrooms = $('p[data-nBedrooms]', this).attr('data-nBedrooms');
				nBedrooms.push(currentNBedrooms);
			});

			return nBedrooms;
		},

		calcMin: function(array){
			if(array.length > 0){
				return array[0];
			}else{
				return 0;
			}
		},

		calcMax: function(array){
			if(array.length > 0){
				var max = array.length-1;
				return array[max];
			}else{
				return 0;
			}
		},

		parseEl: function(){
			var data = {},
				nBedrooms = this.allNBedrooms();
			//console.log(nBedrooms);
			
			data.nBedroomsMin = this.calcMin(nBedrooms);
			data.nBedroomsMax = this.calcMax(nBedrooms);

			//console.log(data);
				
			Mustache.parse(filterTemplate);
			var rendered = Mustache.render(filterTemplate, {data:data});
			//console.log(rendered);

			return rendered;
		},

		getRenderedHtml: function(){
			var output = this.parseEl(this.$el);
			//console.log(output);
			return output;
		}
	});

	return Filter;
});