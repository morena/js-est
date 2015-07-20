var TempManager = function(){};
TempManager.prototype = {
	
	initialise: function(){
		this.dataStore = [];
	},

	add: function(temp, week){
		if(undefined == this.dataStore[week]){
			this.dataStore[week] = [];
		}
		this.dataStore[week].push(temp);
	},

	monthlyAverage: function(){
		var total = 0,
			totalDays = 0;

		for( var week = 1; week < this.dataStore.length; week++){
			for ( var day = 0; day < this.dataStore[week].length; day++){
				total += this.dataStore[week][day];
				totalDays++;
			}
		}

		return total / totalDays;
	},

	weeklyAverage: function(week){
		var total = 0;

		if(undefined == this.dataStore[week]){
			return "there are no temperatures recorded for this week";
		}

		for(var day = 0; day < this.dataStore[week].length; day++){
			total += this.dataStore[week][day];
		}

		return total / this.dataStore[week].length;
	},

	allWeeksAverage: function(){

		for( var week = 1;  week <= this.dataStore.length -1; week++){
			
			var total = 0,
				average = 0;

			for ( var day = 0; day <= this.dataStore[week].length-1; day++){
				
				total += this.dataStore[week][day];
								
				if(day == this.dataStore[week].length-1){
					average = total / this.dataStore[week].length;
					document.write("The average for week "+week+" is: "+average);
					document.write("<br />");
				}
			}
		}
	}
}

var tempManager = new TempManager();
tempManager.initialise();

tempManager.add(22, 1);
tempManager.add(25, 1);
tempManager.add(21, 2);
tempManager.add(35, 2);
tempManager.add(25, 4);
tempManager.add(20, 4);
tempManager.add(22, 3);
tempManager.add(19, 3);

document.write("Monthly average temperature is "+tempManager.monthlyAverage());
document.write("<br />");
document.write("Weekly average temperature for week 0 is "+tempManager.weeklyAverage(0));
document.write("<br />");
document.write("Weekly average temperature for week 3 is "+tempManager.weeklyAverage(3));
document.write("<br />");
document.write("Weekly average temperature for week 4 is "+tempManager.weeklyAverage(4));
document.write("<br />");
document.write(tempManager.allWeeksAverage());
