seajs.config({
	base: './',
	alias: {
		'container': 'container/container',
		'details': 'details/details',
		'buy': 'buy/buy',
		'login': 'login/login',
		'reg': 'reg/reg',
		'deal': 'deal/deal',
		'router': 'route/router',
		"$": "modules/bin/jquery"
	}
});

seajs.use("router", function(router) {
	router.go(location.hash)
});