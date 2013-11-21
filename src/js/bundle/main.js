define(function(require, exports, module) {
	MainObj={}
	// get the utilities
	if (typeof MainObj.util == 'undefined') {
		var utilsObject = require('./js/bundle/utils.js');
		MainObj.util = new utilsObject({});
	}

	// initialize the whole damn thing
	function init() {
		alert("main init")
	}

	// init once we're reading to go
	$(document).ready(function(){
		requirejs.config({
			waitSeconds: 200
		});

		init();
	});
});