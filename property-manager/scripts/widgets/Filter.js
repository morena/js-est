'use strict';

define(['text!/templates/filter.mst',
	'mustache',
	'utilities/compose'], function(filterTemplate, Mustache, compose){
	var Filter = compose({
		
		view: $('#viewContainer'),
		
		rangeFields: {'nBedrooms', 'nRooms'},

		initialise: function($el){
			this.$el = $el;
		},
		

		calcValues: function(item){
			var itemsArray = [],
				currentItem = 0;

			this.$el.find(".property").each(function(){
				currentItem = $('p[data-'+item']', this).attr('data-'+item);
				itemsArray.push(currentItem);
			});

			return itemsArray;
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
			var data = {};

			for(var key in this.rangeFields){
				
				var itemsArray = calcValues(this.rangeFields[key]),
					minKey = key+'Min',
					maxKey = key+'Max',
					middleKey = key+'Middle';
			
				data[minKey] = this.calcMin(itemsArray);
				data[maxKey] = this.calcMax(itemsArray);
				data[middleKey] = this.calcMiddle(data[minKey], data[maxKey]);

			}

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