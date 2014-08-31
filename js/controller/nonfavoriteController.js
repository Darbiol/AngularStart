app.controller( 'NonFavoriteController', [ '$rootScope', '$http', 'filterFilter','$scope', '$location', function ( $rootScope, $http, filterFilter, $scope, $location ) {

	$http.get('resources/data/heroCollection.json').success(function(data) {
		$scope.filteredHero = filterFilter( data, false);
	});

	$scope.isActive = function ( route ) {
		return route === $location.path();
	}

} ] );