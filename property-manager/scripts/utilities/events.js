'use strict';

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
			if(this.registeredEvents[eventName].length == 0){
				this.registeredEvents[eventName].push(callback);
			}else{
				for( var i = 0; i < this.registeredEvents[eventName].length; i++){
					if(callback != this.registeredEvents[eventName][i]){
						this.registeredEvents[eventName].push(callback);
					}
				}
			}
		},

		/* Fires the event */
		trigger: function(eventName){
			var eventn = this.registeredEvents[eventName];
			if(eventn){
				var args = Array.prototype.slice.call(arguments, 1);
				for(var i = 0; i < eventn.length; i++){
					eventn[i].apply(null, args);
				}
			}
		},

		off: function(eventName, callback){
			var registeredEvents = this.registeredEvents;
			for(var i = registeredEvents[eventName].length-1; i >= 0; i-- ){
				if(registeredEvents[eventName][i] == callback){
					registeredEvents[eventName].splice(i, 1);
				}
			}
		}
	});

	return events;
});