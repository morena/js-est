//Example of ADT (abstract data type)
var List = function(){

};

var movies = ["The Shaw Redemption",
"The Godfather",
"The Godfather: Part II",
"Pulp Fiction",
"The Good, the Bad and the Ugly",
"12 Angry Men",
"Schindler's List",
"The Dark Knight",
"The Lord of the Rings: The Return of the King",
"Fight Club",
"Star Wars V",
"One Flew Over the Cuckoo's Nest",
"The Lord of the Rings: The Fellowship of the Ring",
"Inception",
"Goodfellas",
"Star Wars I",
"Seven Samurai",
"The Matrix",
"Forrest Gump",
"City of God"];


List.prototype = {
	listSize: 0,
	pos: 0,
	dataStore: [], //initializes an empty array to store list elements

	append: function(element){
		this.dataStore[this.listSize++] = element;
	},

	find: function(element){
		for (var i = 0; i < this.dataStore.length; i++) {
			if( this.dataStore[i] == element){
				return i;
			}
		}
		return -1;
	},

	remove: function(element){
		var foundAt = this.find(element);

		if(foundAt > -1){
			this.dataStore.splice(foundAt, 1);
			--this.listSize;
			return true;
		}
		return false;
	},

	length: function(){
		return this.listSize;
	},

	toString: function(){
		return this.dataStore;
	},

	insert: function(element, after){
		if(undefined == after){
			this.dataStore.push(element);
		}
		var insertPos = this.find(after);
		if(insertPos > -1){
			this.dataStore.splice(insertPos+1, 0, element);
			++this.listSize;
			return true;
		}
		return false;
	},

	clear: function(){
		delete this.dataStore;
		this.dataStore = [];
		this.listSize = this.pos = 0;
	},

	contains: function(element){
		for (var i = 0; i < this.dataStore.length; ++i){
			if(this.dataStore[i] == element){
				return true;
			}
		}
		return false;
	},

	front: function(){
		this.pos = 0;
	},

	end: function(){
		this.pos = this.listSize-1;
	},

	prev: function(){
		if(this.pos > 0){
			--this.pos;
		}
	},

	next: function(){
		if(this.pos < this.listSize-1){
			++this.pos
		}
	},

	currPos: function(){
		return this.pos;
	},

	moveTo: function(position){
		this.pos = position;
	},

	getElement: function(){
		return this.dataStore[this.pos];
	},
	displayList: function(){
		for (this.front(); this.currPos() < this.length(); this.next()){
			document.write(this.getElement());
		}
	}
}

var list = new List();
for(var i = 0; i < movies.length; i++){
	list.append(movies[i]);
}
list.displayList();
console.log(list.dataStore);