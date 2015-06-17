define( ['mustache'], function(Mustache){

	var DataPopulator = function($divToPopulate){
		this.$divToPopulate =  $divToPopulate;
	};

	DataPopulator.prototype = {
		makeRequest: function(){

			var dataPopulator = this;

			$.when($.ajax({url: "../data/template.mst", dataType: 'text'}),$.ajax({url: "../data/test.json"}))
			.done(function(template, data){
				dataPopulator.populateData(template[0], data[0].panels);
			})
			.fail(function(){
				alert("Sorry there was an error.");
			});
		},

		populateData: function(template, panels){
			Mustache.parse(template);
			var rendered = Mustache.render(template, {panels:panels});
			this.$divToPopulate.append(rendered);
		}
	}

	//we return DataPopulator as a constructor, not an object and not a function 
	//because we want to instantiate the object only when we need it 
	//and call necessary functions when we need them
	//we don't want to instantiate the object by default in each module
	return DataPopulator;
});