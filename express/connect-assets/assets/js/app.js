App = {
	Models: {},
	Collections: {},
	Views: {},

	initialize: function (options) {
		console.log('app initialize');
		this._initializeLibs();
	},

	_initializeLibs: function()  {
		var libs = ['underscore', 'backbone'];

		if(!JSON && !JSON.stringify && !JSON.parse) {
			libs.splice(0, 0, 'json2');
		}
		
		for (var i = 0; i < libs.length; i++) {
			require('_libs/' + libs[i]);
		}
	}

};