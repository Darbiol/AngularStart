app.controller( 'FavoriteController', [ '$http', 'filterFilter','$scope','$location',  function ( $http, filterFilter, $scope, $location ) {

	$http.get('resources/data/heroCollection.json').success(function(data) {
		$scope.filteredHero = filterFilter( data, true);
	});

	$scope.isActive = function ( route ) {
		return route === $location.path();
	}

} ] );