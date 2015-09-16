define(['./Property'], function(Property){
	var Flat = compose(Property, function() {
		type:'Flat'
	});

	return Flat;
});