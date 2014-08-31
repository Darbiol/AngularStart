app.controller( 'ProfileController', [ '$scope', '$routeParams', '$http',  function ( $scope, $routeParams, $http ) {
	
	$scope.id = $routeParams.id; 
	$http.get( 'resources/data/' + $scope.id + '.json' ).success( function ( data ) {
		console.log(data)
		$scope.person = data;
	} );

} ] );
