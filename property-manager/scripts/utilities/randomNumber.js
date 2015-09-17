define([], function(){
	randomNumber = {
		generateRandomID: function(){
			var min = 1,
				max = 1000;
				random = Math.floor(Math.random()* (max-min+1)) + min;

			return random;
		}
	}

	return randomNumber;
});