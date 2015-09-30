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

		calcMiddle: function(min, max){
			return (+min+ +max)/2;
		},

		parseEl: function(){
			var data = {},
				nBedrooms = this.allNBedrooms();
			
			data.nBedroomsMin = this.calcMin(nBedrooms);
			data.nBedroomsMax = this.calcMax(nBedrooms);
			data.nBedroomsMiddle = this.calcMiddle(data.nBedroomsMin, data.nBedroomsMax);

			Mustache.parse(filterTemplate);
			var rendered = Mustache.render(filterTemplate, {data:data});

			return rendered;
		},

		getRenderedHtml: function(){
			var output = this.parseEl(this.$el);
			return output;
		}
	});

	return Filter;
});