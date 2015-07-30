define([], function(){

	var events = compose({
		registeredEvents: {},

		initialise: function(){

		},

		/* Handles the event */
		on: function(eventName, callback){
			if(!this.registeredEvents[eventName]){
				this.registeredEvents[eventName] = [];
			}

			this.registeredEvents[eventName].push(callback);
		},

		/* Fires the event */
		trigger: function(eventName){
			var eventn = this.registeredEvents[eventName];
			if(eventn){
				var args = Array.prototype.slice.call(arguments, 1);
				//console.log("event "+eventName+" has been registered");
				for(var i = 0; i < eventn.length; i++){
					eventn[i].apply(null, args);
				}
			}/*else{
				console.log("the event "+eventName+" has NOT been registered yet");
			}*/
		},

		off: function(eventName, callback){
			var events = this.registeredEvents;
			console.log(events);
			/*for(var i = 0; i < events[eventName].length-1; i-- ){
				if(events[eventName][i] == callback){
					console.log("same function");
					//events = events[eventName].splice(i, 1);
					//console.log(events);
				}
			}*/
		}
	});

	return events;
});