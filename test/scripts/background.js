define(['jquery', 'Base'], function($, Base){

	var Background = function($el, params){
		this.initialise($el, params);
	}
	
	//compose(Base, Background);

	Background.prototype = {
		initialise: function($el, params){

			Base.prototype.initialise.apply(this, arguments);

			params = params();

			if(params){
				for(var param in params){
					$($el).css(param, params[param]);
				}
			}
		}
	}

	return Background;
});


var Super = compose({
	methodA: function(){
		console.log('methodA');
	}
});

var instance = new Super();
instance.methodA();

/*var Sub = compose(Super, {

	initialise: function(){
		this.methodA();
		this.methodB();
	},

	methodB: function(){
		console.log('methodB');
	}
});

console.log(Sub);

new Sub();*/