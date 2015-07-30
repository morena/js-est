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
	rentedMovies: [],

	append: function(element){
		this.dataStore[this.listSize++] = element;
	},

	find: function(element){
		for(var i = 0; i <this.dataStore.length; i++){
			if(this.dataStore[i] == element){
				return i;
			}
		}
		return -1;
	},

	contains: function(element){
		for(var i = 0; i <this.dataStore.length; i++){
			if(this.dataStore[i] == element){
				return true;
			}
		}
		return false;
	},

	remove: function(element){
		var foundAt = this.find(element);
		if(foundAt > -1){
			this.dataStore.splice(foundAt,1);
			--this.listSize;
			return true;
		}
		return false;
	},

	displayList: function(list){
		if(!list){
			list = this.dataStore;
		}
		for (var i = 0; i < list.length; i++){
			document.write(list[i]+'<br />');
		}
	},

	checkout: function(name, movie, movieList, customerList){
		if(movieList.contains(movie)){
			var c = new Customer(name, movie);
			customerList.append(c);
			movieList.remove(movie);
			this.rentedMovies.push(movie);
			this.displayList(this.rentedMovies);
		}else{
			document.write(movie+ "is not available");
		}
	},

	checkin: function(movie){
		for(var i = 0; i < this.rentedMovies.length; i++){
			if(this.rentedMovies[i] == movie){
				this.rentedMovies.splice(i, 1);
				this.dataStore.push(movie);
			}
		}
	}
}

var Customer = function(name,movie){
	this.name = name;
	this.movie = movie;
}

var movielist = new List();
for(var i = 0; i < movies.length; i++){
	movielist.append(movies[i]);
}
document.write("Movie List<br />");
movielist.displayList();
var customers = new List();

movielist.checkout("Jane", "The Godfather", movielist, customers);
document.write("<br />Customer Rentals:<br />");
customers.displayList();

movielist.checkin("The Godfather");
document.write("<br />Customer Rentals:<br />");
customers.displayList();