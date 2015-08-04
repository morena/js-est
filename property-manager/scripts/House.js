define(['Property'], function(Property){
	var House = compose(Property, function() {
		numberOfFloors: 0,
		gardenSize: 0
	});

	return House;
});