app.controller( 'AllController', [ '$rootScope', '$http', '$scope', '$location',  function ( $rootScope, $http, $scope, $location ) {

	$http.get('resources/data/heroCollection.json').success(function(data) {
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
	}

	$scope.isActive = function ( route ) {
		return route === $location.path();
	}
} ] );

