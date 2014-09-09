app.factory( 'heroQueryFactory', [ '$http', function ( $http ) {
	var heroesObj = {};
	var heroes;


	heroesObj.getHeroes = function ( callback ) {

		if ( !heroes ) {
			$http.get('/heroes').success(function(data) {
				heroes = data;
				callback( heroes );
			});
		} else {
			callback( heroes );
		}
		return heroes;

	}

	heroesObj.getHero = function ( heroId, callback ) {

		this.getHeroes( function ( persons ) {
			var index = _.findIndex( heroes, function ( i ) {
				return i.id == heroId;
			} );

			callback(heroes[index]);
		} );

	}

	heroesObj.addHero = function ( hero ) {
		heroes.push( hero );
	}

	heroesObj.setHero = function ( hero ) {

		var index = _.findIndex( heroes, function ( i ) {
			return i.id == hero.id;
		} );
		heroes[index] = hero;
	}

	heroesObj.deleteHero = function ( hero ) {
		_.remove( heroes, function ( i ) {
			return i.id == hero.id;
		} );
	}

	return heroesObj;

} ] );
