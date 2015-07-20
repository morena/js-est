var StringManipulator = function(){};

StringManipulator.prototype = {
	
	//have to use the Regex object for cross browser compatibility
	regex: new RegExp(',', 'g'),
	words: ["I", "would", "like", "to", "go","to","the","sea"],


	replaceCommas: function(sentence){
		sentence = sentence.replace(this.regex, " ");

		return sentence;
	},

	displaySentence: function(){
		var wordsInOrder = this.words.toString(),
			sentence = this.replaceCommas(wordsInOrder);

		return sentence;
	},

	inverseSentence: function(){
		var words = this.words.reverse(),
			wordsInOrder = words.toString(),
			sentence = this.replaceCommas(wordsInOrder);

		return sentence;
	}
}

stringManipulator = new StringManipulator();
document.write(stringManipulator.displaySentence());
document.write("<br />");
document.write(stringManipulator.inverseSentence());