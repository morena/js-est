define(['Property'], function(Property){
	var House = compose(Property, function() {
		type:'House',
		numberOfFloors: 0,
		gardenSize: 0,

		initialise: function(){
			this.formProperties.["numberOfFloors"] = {"textField": true, "validation", "numeric", "label": "Number of floors"} ;
			this.formProperties.["gardenSize"] = {"textField": true, "validation", "numeric", "label": "Size of the garden (in sqm)"} ;
		}
	});

	return House;
});