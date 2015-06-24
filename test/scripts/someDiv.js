define([],function(){
	var SomeDiv = function($el){
		console.log("somediv");
		$($el).css('color', 'red');
	};

	return SomeDiv;

})