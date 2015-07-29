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
			if(events[eventName][callback]){
				delete events[eventName][callback];

				console.log(events);
			}
		}
	});

	return events;
});