define(["jquery"], function($){
	
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
		formProperties:[],

		initialise: function(){
			/*this.getData(function(data){
				this.formProperties = data;
			});
			console.log("here");*/
		},

		getData: function(callback){
			var self = this;

			$.ajax({
				url: "../data/formProperties.json", 
				dataType: 'text'
			}).done(function(data) {
			  //callback($.parseJSON(data));
			  return $.parseJSON(data);
			});
		}
	});

	return Property;
});