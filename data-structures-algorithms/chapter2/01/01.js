GradeManager = function(){

};

GradeManager.prototype = {
	
	grades: [],

	addGrade: function(gradeToAdd){
		this.grades.push(gradeToAdd);
	},

	displayAverage: function () {
		var total = 0;
		var average = 0;

		for (var i =0; i < this.grades.length; i++) {
			total+= this.grades[i];
		};

		average = total/this.grades.length;

		//console.log(average);
		document.write(average);
	}
}

var gradesManager = new GradeManager();

gradesManager.addGrade(12);
gradesManager.addGrade(1);
gradesManager.addGrade(33);
gradesManager.addGrade(54);

gradesManager.displayAverage();