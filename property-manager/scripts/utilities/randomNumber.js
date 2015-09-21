'use strict';

define([], function(){

	var idCount = 0;

	randomNumber = {
		generateRandomN: function(){
			var min = 1,
				max = 1000;
				random = Math.floor(Math.random()* (max-min+1)) + min;

			return random;
		},

		uniqueId: function(){
			return idCount++;
		}
	}

	return randomNumber;
});