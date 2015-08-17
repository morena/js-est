define(["jquery"], function($){
	
	function supports_history_api() {
	  return !!(window.history && history.pushState);
	}

	router = {

		clickManager: function(link, stateData, callback){
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
		}
		/*$(window).on('hashchange', function(){
		    if(window.location.hash.match(/^\/add$/)){
		      //this is my '/add' route
		    }
		});*/
	};

	return router;
})


