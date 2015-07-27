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

	displayByGender: function(gender){
		var listByGender = [];

		for (var i = 0; i < this.dataStore.length; i++) {
			for(personData in this.dataStore[i]){
				if(this.dataStore[i][personData] === gender){
					//listByGender.push(this.dataStore[i]);
					listByGender.push(this.dataStore[i].name);
				}
			}
		}

		return listByGender;

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
	}
}

var Person = function(name, gender){
	this.initialise(name, gender);
}
Person.prototype = {
	name: '',
	gender: 'female',

	initialise:function(name, gender){
		this.name = name;
		this.gender = gender;
	}
}

var list = new List();

var person1 = new Person("Morena", "female");
list.insert(person1);
var person2 = new Person("Paul", "male");
list.insert(person2);
var person3 = new Person("Mike", "male");
list.insert(person3);
var person4 = new Person("Jo", "female");
list.insert(person4);
var person5 = new Person("Viviana", "female");
list.insert(person5);
var person6 = new Person("Kevin", "male");
list.insert(person6);
var person7 = new Person("Jon", "male");
list.insert(person7);
var person8 = new Person("Sophie", "female");
list.insert(person8);
var person9 = new Person("Verity", "female");
list.insert(person9);
var person10 = new Person("Gary", "male");
list.insert(person10);

document.write(list.displayByGender("female"));