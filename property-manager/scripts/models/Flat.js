'use strict';

define(['./Property', '../utilities/compose'], function(Property, compose){
	var Flat = compose(Property, function() {
		type:'Flat'
	});

	return Flat;
});