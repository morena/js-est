define([], function(){
	
	var Property = compose({
		size: 0,
		numberOfRooms: 0,
		numberofBedrooms: 0,
		numberOfBathrooms: 0,
		address: null,
		typeOfSale: 'ForSale',
		dateAdded: null,
		title: null,
		propertyType: null,

		formProperties:{
			size: {"textField": true, "validation", "numeric", "label": "Size of the property (in sqm)"},
			numberOfRooms: {"textField": true, "validation", "numeric", "label": "Number of rooms"},
			numberofBedrooms: {"textField": true, "validation", "numeric", "label": "Number of bedrooms"},
			numberOfBathrooms: {"textField": true, "validation", "numeric", "label": "Number of bathrooms"},
			address: {"textareaField": "true", "validation", "alphanumeric", "label": "Property Address"},
			typeOfSale: {"radioField": "true", "validation", "radio", "options": [{"optionName": "ForSale"},{"optionName": "ToRent"}], "label": "Is the property for sale or to rent?"},
			//dateAdded: {"textField": true, "validation", "numeric", "label": ""},
			title: {"textField": true, "validation", "alphanumeric", "label": "Listing Title"}
		}
	});

	return Property;
});