define(["jquery"], function($){
	
	function supports_history_api(){
		return !!(window.history && history.pushstate);
	}


	router = {

		clickManager: function(link, callback){
			history.pushState(null, null, link);
			if(typeof callback === 'function'){
				callback();
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


