app.factory( 'heroQueryFactory', [ '$http', function ( $http ) {
	var heroesObj = {};
	var heroes;

	$http.get('/heroes').success(function(data) {
		heroes = data;
	});

	heroesObj.getHeroes = function ( callback ) {

		return heroes;
	}

	return heroesObj;

} ] );
