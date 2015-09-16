define(['./Property'], function(Property){
	var House = compose(Property, {
		type:'House',
		numberOfFloors: 0,
		gardenSize: 0
	});

	return House;
});