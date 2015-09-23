'use strict';

define(['./Property', '../utilities/compose'], function(Property, compose){
	var House = compose(Property, {
		type:'House',
		numberOfFloors: 0,
		gardenSize: 0
	});

	return House;
});