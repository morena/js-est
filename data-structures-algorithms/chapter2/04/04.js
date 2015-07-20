var LetterHolder = function(){

}
LetterHolder.prototype = {
	letters: ["a", "b", "r", "t", "e"],
	regex : new RegExp(",", 'g'),

	displayLetters: function(){
		var sentence = this.letters.toString();
		sentence = sentence.replace(this.regex, "");

		return sentence;
	}
}

var letterHolder = new LetterHolder();
document.write(letterHolder.displayLetters());