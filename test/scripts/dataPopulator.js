define( ['mustache'], function(Mustache){

	return {

		initialise: function($divToPopulate){
			this.$divToPopulate =  $divToPopulate;
		},

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
});