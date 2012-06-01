var products = [
	{
		  id: 1
		, name: 'Mac Book Pro'
		, description: 'Apple 13 inch Mac Book Pro Notebook'
		, price: 1000
	},
	{
		  id: 2
		, name: 'iPad'
		, description: 'Apple 64gb 3g iPad'
		, price:  899
	}
];

exports.all = products;

exports.find = function (id) {
	id = parseInt(id);
	for(var i in products) {
		if(products[i].id === id)
			return products[i];
	}
};