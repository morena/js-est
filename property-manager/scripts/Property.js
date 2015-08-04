define([], function(){
	
	var Property = compose({
		size: 0,
		numberOfRooms: 0,
		numberofBedrooms: 0,
		numberOfBathrooms: 0,
		address: null,
		typeOfSale: 'sale',
		dateAdded: null,
		title: null,
		propertyType: null
	});

	return Property;
});