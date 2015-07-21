//Example of ADT (abstract data type)
var List = function(){

};

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

	insertIfLarger: function(element){
		var larger = false;

		for (var i = 0; i < this.dataStore.length; i++) {
			if(this.dataStore[i] < element){
				larger = true;
			}else{
				larger = false;
			}
		};
		console.log(larger);

		if(larger === true){
			this.dataStore.push(element);
		}

	},

	clear: function(){
		delete this.dataStore;
		this.dataStore = [];
		this,listSize = this.pos = 0;
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
	}
}

var list = new List();
/*list.insert(0);
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
document.write(list.dataStore+"<br />");
list.insertIfLarger(2);
document.write(list.dataStore+"<br />");
list.insertIfLarger(5);
document.write(list.dataStore+"<br />");*/

list.insert("a");
list.insert("b");
list.insert("c");
list.insert("d");
list.insert("e");
document.write(list.dataStore+"<br />");
list.insertIfLarger("a");
document.write(list.dataStore+"<br />");
list.insertIfLarger("w");
document.write(list.dataStore+"<br />");