define(function(require, exports, module) {
	return function(config) { 

		function alert(msg) {
			alert(msg)
		};

		// put things into the public scope
		return {
			alertmsg: alert,
		}
	}
})