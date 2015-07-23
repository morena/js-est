define([], function(){

	events = {
		registeredEvents: {},

		trigger: function(eventName, params){
			//this.registeredEvents.push(eventName);
			if(this.registeredEvents[eventName]){
				//console.log("event "+eventName+" has been registered");
				return this.registeredEvents[eventName].fnc.apply(this, arguments);
			}else{
				//console.log("the event "+eventName+" has NOT been registered yet");
			}
			this.registeredEvents[eventName].apply(this, arguments);
		},

		on: function(eventName, fnc){
			this.registeredEvents[eventName] = {fnc:fnc};
		},

		off: function(eventName){
			if(this.registeredEvents.eventName){
				delete this.registeredEvents.eventName;
			}
		}
	};

	return events;
});