app.controller( 'ProfileController', [ '$scope', '$routeParams', '$http',  function ( $scope, $routeParams, $http ) {

	$scope.id = $routeParams.id;
	$http.get( 'resources/data/' + $scope.id + '.json' ).success( function ( data ) {
		console.log(data[0])
		$scope.person = data;
		$scope.selectedImage = data[0].imageUrl[ 0 ];
	} );

	$scope.setImage = function ( imgUrl ) {
		$scope.selectedImage = imgUrl;
	}

} ] );
