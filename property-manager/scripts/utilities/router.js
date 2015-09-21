'use strict';

define(["jquery"], function($){
	
	function supports_history_api() {
	  return !!(window.history && history.pushState);
	}

	router = {

		_routes: [],

		start: function(){
			var self = this;
			$(window).on('popstate', function(){
				self._routeChangeHandler();
			});
			this._routeChangeHandler();
		},

		navigate: function(route){
			window.history.pushState(null, null, route);
			this._routeChangeHandler();
		},

		route: function(route, callback){
			this._routes.push({
				route: route,
				callback: callback
			});
		},

		_routeChangeHandler: function(){
			var url = window.location.pathname;

			for(var i=0; i<this._routes.length; i++){
				if(url === this._routes[i].route){
					this._routes[i].callback();
					break;
				}
			}
		}

		/*clickManager: function(link, stateData, callback){
			if(supports_history_api() === true){

				history.pushState(stateData, null, link);

				//this never gets fired up
				window.onpopstate = function(event){
					console.log(document.location);
				}

				if(typeof callback === 'function'){

					callback();
				}
			}
		}*/
		/*$(window).on('hashchange', function(){
		    if(window.location.hash.match(/^\/add$/)){
		      //this is my '/add' route
		    }
		});*/
	};

	return router;
})


