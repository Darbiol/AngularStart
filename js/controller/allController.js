app.controller( 'AllController', [ '$rootScope', '$http', '$scope', '$location',  function ( $rootScope, $http, $scope, $location ) {

	$http.get('/heroes').success(function(data) {
		$scope.filteredHero = data;
	});


	$rootScope.addNew = function () {
		if ( $rootScope.newPerson != null && $rootScope.newPerson != "" ) {
			$rootScope.people.push( {
				'id' : $rootScope.people.length,
				'name' : $rootScope.newPerson,
				'flagged' : true,
				'Powers' : []
			} );
		}
	}
	$rootScope.toggleFave = function () {
		if ( this.person.flagged ) {
			this.person.flagged = false;
		}else {
			this.person.flagged = true;
		}

		$http.put( '/heroes', $scope.filteredHero ).then( function ( data ) {
			console.log( data );
		} )
	}

	$scope.isActive = function ( route ) {
		var path = $location.path()
		if( path === '/' ) {
			path = '/all'
		} else {

		}
		// console.log(route)
		return route === path;
	}
} ] );

