define([], function(){
	var Property = function(){

	};

	Property.prototype = {
		size: 0,
		numberOfRooms: 0,
		numberofBedrooms: 0,
		numberOfBathrooms: 0,
		address: null,
		sold: false,
		rented: false,
		forSale: false,
		toRent: false,
		dateAdded: null,
		title: null
	};

	return Property;
});